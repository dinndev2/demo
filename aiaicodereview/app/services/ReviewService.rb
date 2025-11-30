require "gemini-ai"

class ReviewService
  def self.generate_comment(pull_request, prompt)
    user = pull_request.user
    begin
      client = Gemini.new(
       credentials: {
         service: 'generative-language-api',
         api_key: ENV['GOOGLE_API_KEY'],
         version: 'v1beta'
       },
       options: { model: 'gemini-2.5-flash', server_sent_events: true }
     )
      comment = Comment.new(pull_request: pull_request, content: "")
      comments = []
      client.generate_content({ contents: { role: 'user', parts: { text: prompt } } }) do |chunk|
        # Safely drill into the structure
        text = chunk.dig("candidates", 0, "content", "parts", 0, "text")

        if text.present?
          comments << text
          comment.content = comments.join("")
        end
      end
      
      comment.save!
    rescue => exception
      Rails.logger.error "AI review failed: #{exception.message}"
    end
  end
end
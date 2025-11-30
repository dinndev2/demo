class CommentJob < ApplicationJob
  queue_as :default

  def perform(pull_request)
    begin
      client = Octokit::Client.new(access_token: ENV["GITHUB_TOKEN"])
      repo   = pull_request.repo_full_name
      number = pull_request.number
      diff = client.pull_request(repo, number, accept: "application/vnd.github.diff")
      prompt = "Review the following GitHub pull request diff and provide clear feedback. #{diff}"
      ReviewService.generate_comment(pull_request, prompt)
    rescue => exception
      Rails.logger.error "AI review failed: #{exception.message}"

    end
  end
end
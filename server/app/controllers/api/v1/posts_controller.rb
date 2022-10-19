module Api
  module V1
    class PostsController < ApplicationController
      
      # GET /posts or /posts.json
      def index
        @posts = Post.all
        render json: @posts
      end

      def show
        @post = Post.find(params[:id])
        render json: @post
      end

      private

        def post_params
          params.require(:post).permit(:title, :body)
        end
    end
  end
end

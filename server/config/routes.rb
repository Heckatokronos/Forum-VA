Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :comments
  end

  namespace 'api' do
    namespace 'v1' do
      resources :posts
    end
  end
end

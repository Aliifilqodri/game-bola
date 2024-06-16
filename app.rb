require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

high_score = 0

post '/score' do
  request.body.rewind
  data = JSON.parse(request.body.read)
  score = data['score']

  if score > high_score
    high_score = score
  end

  content_type :json
  { high_score: high_score }.to_json
end

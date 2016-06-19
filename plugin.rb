# name: m4a audio uploads
# about: adds m4a filetype to audio filetype list
# authors: scossar
# url: https://github.com/scossar/m4a-audio-uploads

register_asset 'javascripts/discourse/lib/utilities.js'

class Onebox::Engine::AudioOnebox
  include Onebox::Engine

  matches_regexp /^(https?:)?\/\/.*\.(mp3|ogg|wav|m4a)(\?.*)?$/

  def always_https?
    WhitelistedGenericOnebox.host_matches(uri, WhitelistedGenericOnebox.https_hosts)
  end

  def to_html
    "<audio controls><source src='#{@url}'><a href='#{@url}'>#{@url}</a></audio>"
  end

end
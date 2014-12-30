require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module Portfolio
  class Application < Rails::Application
    config.time_zone = 'Tokyo'
    config.active_record.raise_in_transactional_callbacks = true
  end
end

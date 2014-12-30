class ImageUploader < CarrierWave::Uploader::Base
  storage :file
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{model.id}/#{mounted_as}"
  end
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def filename
     "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected
  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
  end
end

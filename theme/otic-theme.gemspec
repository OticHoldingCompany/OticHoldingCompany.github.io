# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "otic-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Otic Holding Team"]
  spec.email         = ["info@oticholding.com"]

  spec.summary       = "Jekyll theme for Otic Holding Company"
  spec.homepage      = "https:://www.oticholding.com"
  spec.license       = "Proprietary"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end

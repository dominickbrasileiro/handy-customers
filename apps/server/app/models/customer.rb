class Customer < ApplicationRecord
  has_many :orders
  validates :name, presence: true
  validates :phone_number, presence: true
  validates :birth_date, presence: true
end

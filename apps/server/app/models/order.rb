class Order < ApplicationRecord
  belongs_to :customer
  has_many :order_items
  validates :amount, presence: true, numericality: { only_integer: true, greater_than: 0 }
end

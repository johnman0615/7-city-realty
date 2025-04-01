-- Insert Users (Buyers, Sellers, and Agents)
INSERT INTO users (name, email, phone, user_type) VALUES
('John Doe', 'johndoe@example.com', '123-456-7890', 'seller'),
('Jane Smith', 'janesmith@example.com', '234-567-8901', 'seller'),
('Robert Brown', 'robertbrown@example.com', '345-678-9012', 'agent'),
('Emily Johnson', 'emilyjohnson@example.com', '456-789-0123', 'agent'),
('Michael White', 'michaelwhite@example.com', '567-890-1234', 'buyer');

-- Insert Agents
INSERT INTO agents (user_id, agency_name, rating) VALUES
((SELECT user_id FROM users WHERE email='robertbrown@example.com' LIMIT 1), 'Brown Realty', 4.8),
((SELECT user_id FROM users WHERE email='emilyjohnson@example.com' LIMIT 1), 'Johnson & Co. Real Estate', 4.6);

-- Insert Properties
INSERT INTO properties (description, price, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, agent_id, seller_id, status)
VALUES
('A one story Villa includes 2 Amazing bedrooms, with an en-suite bathroom in the Primary bedroom.', 259900.00, '112 Coventry Ln', 'Haines City', 'FL', '33844', 'house', 2, 2, 1226, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='johndoe@example.com' LIMIT 1), 'available'),

('Contemporary home in Crystal Beach is a waterfront masterpiece.', 2690000.00, '812 Point Seaside Dr', 'Crystal Beach', 'FL', '34681', 'house', 8, 7, 8908, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available'),

('Townhouse with low maintenance.', 340000.00, '2414 Hounds Trl', 'Palm Harbor', 'FL', '34683', 'townhouse', 2, 3, 1260, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='johndoe@example.com' LIMIT 1), 'pending'),

('Newly built Craftsman bungalow in Seminole Heights.', 585000.00, '1324 E Giddens Ave', 'Tampa', 'FL', '33603', 'house', 3, 2, 1500, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available'),

('Charming yet beautifully updated vintage bungalow.', 535000.00, '1436 Georgia Blvd', 'Orlando', 'FL', '32803', 'house', 3, 2, 1159, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='johndoe@example.com' LIMIT 1), 'available'),

('Home nestled on a desirable corner lot in a friendly community.', 285000.00, 'c', 'Fort Myers', 'FL', '33905', 'house', 2, 2, 1486, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'sold'),

('Absolutely Stunning!! Zero Damage from Ian, Milton or Helene. This home is built to last and is high and dry.', 1200000.00, '1252 Biltmore Dr', ' Fort Myers', 'FL', '33901', 'house', 4, 5, 3200, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='johndoe@example.com' LIMIT 1), 'available'),

('Perfect blend of luxury and comfort.', 850000.00, '16200 Ivy Lake Dr', 'Odessa', 'FL', '33556', 'house', 4, 3, 3540, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'pending'),

('Charming Townhouse in a Gated Community.', 258000.00, '16229 Swan View Cir', 'Odessa', 'FL', '33556', 'townhouse', 2, 3, 1240, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='johndoe@example.com' LIMIT 1), 'available'),

('Charming 100-Year-Old Modern Farmhouse with Unbelievable Vibe.', 26400.00, '1751 Massachusetts Ave NE', 'Saint Petersburg', 'FL', '33703', 'house', 2, 2, 1248, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available'),

('One story block construction home with two car garage.', 799000.00, '612 Addison Dr NE', 'Saint Petersburg', 'FL', '33716', 'house', 4, 3, 2754, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available'),

('Make this beautifully updated three beds, two baths home blends modern style with comfort home yours.', 739000.00, '7820 SW 33rd Ter', 'Miami', 'FL', '33155', 'house', 3, 2, 1271, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available'),

('Stunning move in ready home in the desirable Blackstone Landing community.', 349900.00, '5571 Sycamore Canyon Dr', 'Kissimmee', 'FL', '34758', 'house', 3, 2, 1578, 
 (SELECT agent_id FROM agents WHERE agency_name='Johnson & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='janesmith@example.com' LIMIT 1), 'available');
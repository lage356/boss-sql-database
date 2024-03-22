--department seeds
INSERT INTO deparment(dpt_name)
VALUES 
('Accounting'),
('Marketing'),
('Sales'),
('Information Technology'),
('Human Resources');

--role seeds 

INSERT INTO emp_role (title,salary,deparment_id)
VALUES
('Sales Lead','60000',3),
('Sales Associate','50000',3),
('Junior Engineer','85000',4),
('Tech Lead','55000',4),
('Account Manager','100000',1),
('Marketing Strategist','50000',2),
('Graphic Designer','100000',1),
('Account Manager','60000',2),
('HR Manager','100000',5),
('Recruitment','99500',5);

-- employee seeds
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES

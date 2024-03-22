DROP TABLE IF EXISTS deparment;
DROP TABLE IF EXISTS emp_role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    dpt_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE emp_role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT NOT NULL,
    FOREIGN KEY (deparment_id)
    REFERENCES department(id)
    ON DELETE SET NULL

);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES emp_role(id)
    ON DELETE SET NULL
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    
);
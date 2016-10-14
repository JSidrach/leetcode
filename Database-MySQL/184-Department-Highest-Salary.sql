# The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.
#
# +----+-------+--------+--------------+
# | Id | Name  | Salary | DepartmentId |
# +----+-------+--------+--------------+
# | 1  | Joe   | 70000  | 1            |
# | 2  | Henry | 80000  | 2            |
# | 3  | Sam   | 60000  | 2            |
# | 4  | Max   | 90000  | 1            |
# +----+-------+--------+--------------+
#
# The Department table holds all departments of the company.
#
# +----+----------+
# | Id | Name     |
# +----+----------+
# | 1  | IT       |
# | 2  | Sales    |
# +----+----------+
#
Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has # the highest salary in the Sales department.
#
# +------------+----------+--------+
# | Department | Employee | Salary |
# +------------+----------+--------+
# | IT         | Max      | 90000  |
# | Sales      | Henry    | 80000  |
# +------------+----------+--------+

# Write your MySQL query statement below
SELECT D1.Name AS Department,
       E1.Name AS Employee,
       E1.Salary AS Salary
  FROM Employee AS E1,
        (SELECT D2.Id,
                D2.Name,
                MAX(E2.Salary) AS Salary
           FROM Department AS D2,
                Employee AS E2
          WHERE D2.Id = E2.DepartmentId
       GROUP BY D2.Name) AS D1
 WHERE D1.Salary = E1.Salary
   AND D1.Id = E1.DepartmentId

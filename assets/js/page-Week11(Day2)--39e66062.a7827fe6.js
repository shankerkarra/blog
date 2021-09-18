(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{477:function(e,t,a){"use strict";a.r(t);var n=a(2),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"week-11-day-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-11-day-2"}},[e._v("#")]),e._v(" Week 11( Day 2)")]),e._v(" "),a("h2",{attrs:{id:"what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[e._v("#")]),e._v(" What is the difference between a primary key and a foreign key")]),e._v(" "),a("p",[e._v("A Primary key constraint on a column signifies that it is uniquely identifies for every row in a table. Whereas Foreign Key is a column that creats a relationship between two tables.")]),e._v(" "),a("p",[e._v("A table can only contain single Primary Key, whereas table can have multiple foreign keys.")]),e._v(" "),a("p",[e._v("Primary key can't have duplicate values, whereas table containing foreign key can have multiple rows with th same value.")]),e._v(" "),a("p",[e._v("Foreign key values are validate against primary key for references. Any value that is not part of the primary key willn't be inserted into foreign table.a column of a primary key.")]),e._v(" "),a("h2",{attrs:{id:"what-is-an-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-alias"}},[e._v("#")]),e._v(" What is an Alias?")]),e._v(" "),a("p",[e._v("An Alias in SQL statemnts are used as a temporary name for shorter representation\nused for tables, columns.")]),e._v(" "),a("h2",{attrs:{id:"demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[e._v("#")]),e._v(" Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:")]),e._v(" "),a("p",[e._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),e._v(" "),a("p",[e._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),e._v(" "),a("p",[e._v("CREATE TABLE doctorspatients (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),e._v(" "),a("p",[e._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),\n)")]),e._v(" "),a("p",[e._v("SQL Statement")]),e._v(" "),a("p",[e._v("select\ndp."),a("em",[e._v(", d.")]),e._v(", p.* from doctorspatients dp\nJOIN doctors d on d.id = dp.doctorId,\njoin patients p on p.id = dp.patientId")]),e._v(" "),a("p",[e._v("Lab Url: https://github.com/shankerkarra/jobcontractors.git")])])}),[],!1,null,null,null);t.default=o.exports}}]);
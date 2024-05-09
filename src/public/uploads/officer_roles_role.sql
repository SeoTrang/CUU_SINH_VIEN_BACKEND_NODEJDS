-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 03:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `one_stop_system_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `officer_roles_role`
--

CREATE TABLE `officer_roles_role` (
  `officerId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `officer_roles_role`
--

INSERT INTO `officer_roles_role` (`officerId`, `roleId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `officer_roles_role`
--
ALTER TABLE `officer_roles_role`
  ADD PRIMARY KEY (`officerId`,`roleId`),
  ADD KEY `IDX_1d723096d5579f576d8269deba` (`officerId`),
  ADD KEY `IDX_8cba317f8029863fb8ced75517` (`roleId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `officer_roles_role`
--
ALTER TABLE `officer_roles_role`
  ADD CONSTRAINT `FK_1d723096d5579f576d8269deba8` FOREIGN KEY (`officerId`) REFERENCES `officer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_8cba317f8029863fb8ced755173` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

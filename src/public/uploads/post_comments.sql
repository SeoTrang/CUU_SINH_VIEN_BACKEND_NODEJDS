-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2024 at 05:23 AM
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
-- Database: `zalochat2`
--

-- --------------------------------------------------------

--
-- Table structure for table `post_comments`
--

CREATE TABLE `post_comments` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_comments`
--

INSERT INTO `post_comments` (`id`, `comment`, `createdAt`, `updatedAt`, `post_id`, `user_id`, `parent_id`) VALUES
(1, 'Xau bome', '2024-01-17 08:35:37', '2024-01-17 08:35:37', 3, 2, NULL),
(2, 'noi lao', '2024-01-17 08:36:53', '2024-01-17 08:36:53', 3, 3, 1),
(3, 'dep the ma bao xau', '2024-01-17 08:49:17', '2024-01-17 08:49:17', 3, 1, 1),
(5, 'hello !', '2024-04-02 08:18:31', '2024-04-02 08:18:31', 3, 1, NULL),
(17, 'Trang phục đẹp không ? ', '2024-04-03 16:09:51', '2024-04-03 16:09:51', 35, 1, NULL),
(18, 'haha🤣🤣', '2024-04-03 16:19:47', '2024-04-03 16:19:47', 35, 1, NULL),
(19, 'great ', '2024-04-03 16:29:17', '2024-04-03 16:29:17', 35, 1, 17),
(20, 'gì vậy', '2024-04-03 16:36:02', '2024-04-03 16:36:02', 19, 1, NULL),
(21, 'nhầm 🤣🤣', '2024-04-03 16:36:38', '2024-04-03 16:36:38', 19, 1, 20),
(22, '😢😢😢', '2024-04-04 01:46:53', '2024-04-04 01:46:53', 34, 2, NULL),
(23, 'kkk', '2024-04-04 01:53:09', '2024-04-04 01:53:09', 34, 2, NULL),
(24, 'test comment', '2024-04-04 01:58:37', '2024-04-04 01:58:37', 32, 2, NULL),
(25, 'test replies', '2024-04-04 02:01:16', '2024-04-04 02:01:16', 32, 1, 24),
(26, 'test replies parent', '2024-04-04 02:03:06', '2024-04-04 02:03:06', 32, 1, NULL),
(27, 'test replies upload file', '2024-04-04 02:03:50', '2024-04-04 02:03:50', 32, 1, 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post_comments`
--
ALTER TABLE `post_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD CONSTRAINT `post_comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `post_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

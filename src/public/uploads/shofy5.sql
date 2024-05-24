-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2024 at 10:46 AM
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
-- Database: `shofy5`
--

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `name`, `createdAt`, `updatedAt`, `category_id`) VALUES
(1, 'Màn hình', '2024-03-16 08:59:35', '2024-03-16 08:59:35', 1),
(2, 'Hệ điều hành', '2024-03-16 08:59:49', '2024-03-16 08:59:49', 1),
(3, 'Camera sau', '2024-03-16 09:00:24', '2024-03-16 09:00:24', 1),
(4, 'Camera trước', '2024-03-16 09:00:52', '2024-03-16 09:00:52', 1),
(5, 'Chip', '2024-03-16 09:01:00', '2024-03-16 09:01:00', 1),
(6, 'RAM', '2024-03-16 09:01:35', '2024-03-16 09:01:35', 1),
(7, 'Dung lượng lưu trữ', '2024-03-16 09:01:50', '2024-03-16 09:01:50', 1),
(8, 'SIM', '2024-03-16 09:02:11', '2024-03-16 09:02:11', 1),
(9, 'Pin, Sạc', '2024-03-16 09:02:29', '2024-03-16 09:02:29', 1),
(10, 'Hãng', '2024-03-16 09:02:37', '2024-03-16 09:02:37', 1),
(11, 'CPU', '2024-03-16 09:17:06', '2024-03-16 09:17:06', 2),
(12, 'RAM', '2024-03-16 09:17:14', '2024-03-16 09:17:14', 2),
(13, 'Ổ cứng', '2024-03-16 09:17:23', '2024-03-16 09:17:23', 2),
(14, 'Màn hình', '2024-03-16 09:17:31', '2024-03-16 09:17:31', 2),
(15, 'Card màn hình', '2024-03-16 09:17:40', '2024-03-16 09:17:40', 2),
(16, 'Cổng kết nối', '2024-03-16 09:17:49', '2024-03-16 09:17:49', 2),
(17, 'Đặc biệt', '2024-03-16 09:18:05', '2024-03-16 09:18:05', 2),
(18, 'Hệ điều hành', '2024-03-16 09:18:15', '2024-03-16 09:18:15', 2),
(19, 'Thiết kế', '2024-03-16 09:18:23', '2024-03-16 09:18:23', 2),
(20, 'Kích thước, khối lượng', '2024-03-16 09:18:34', '2024-03-16 09:18:34', 2),
(21, 'Thời điểm ra mắt', '2024-03-16 09:18:48', '2024-03-16 09:18:48', 2),
(22, 'Màn hình', '2024-03-16 09:33:48', '2024-03-16 09:33:48', 3),
(23, 'Hệ điều hành', '2024-03-16 09:33:57', '2024-03-16 09:33:57', 3),
(24, 'Chip', '2024-03-16 09:34:08', '2024-03-16 09:34:08', 3),
(25, 'RAM', '2024-03-16 09:34:16', '2024-03-16 09:34:16', 3),
(26, 'Dung lượng lưu trữ', '2024-03-16 09:34:25', '2024-03-16 09:34:25', 3),
(27, 'Kết nối', '2024-03-16 09:34:42', '2024-03-16 09:34:42', 3),
(28, 'Camera sau', '2024-03-16 09:34:55', '2024-03-16 09:34:55', 3),
(29, 'Camera trước', '2024-03-16 09:35:03', '2024-03-16 09:35:03', 3),
(30, 'Pin, Sạc', '2024-03-16 09:35:12', '2024-03-16 09:35:12', 3),
(31, 'Hãng', '2024-03-16 09:35:21', '2024-03-16 09:35:21', 3),
(32, 'Pin', '2024-03-16 10:10:41', '2024-03-16 10:10:41', 8),
(33, 'Cổng sạc', '2024-03-16 10:11:02', '2024-03-16 10:11:02', 8),
(34, 'Tương thích', '2024-03-16 10:11:50', '2024-03-16 10:11:50', 8),
(35, 'Tiện ích', '2024-03-16 10:12:07', '2024-03-16 10:12:07', 8),
(36, 'Hỗ trợ kết nối', '2024-03-16 10:12:16', '2024-03-16 10:12:16', 8),
(37, 'Điều khiển bằng', '2024-03-16 10:12:25', '2024-03-16 10:12:25', 8),
(38, 'Hãng', '2024-03-16 10:12:33', '2024-03-16 10:12:33', 8);

-- --------------------------------------------------------

--
-- Table structure for table `attributevalues`
--

CREATE TABLE `attributevalues` (
  `id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `variation_id` int(11) DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attributevalues`
--

INSERT INTO `attributevalues` (`id`, `value`, `createdAt`, `updatedAt`, `variation_id`, `attribute_id`) VALUES
(1, 'OLED6.1\"Super Retina XDR', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 1),
(2, 'iOS 15', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 2),
(3, '2 camera 12 MP', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 3),
(4, ' 12 MP', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 4),
(5, 'Apple A14 Bionic', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 5),
(6, '4 GB', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 6),
(7, '64 GB', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 7),
(8, '1 Nano SIM & 1 eSIMHỗ trợ 5G', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 8),
(9, '2815 mAh20 W', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 9),
(10, 'iPhone (Apple)', '2024-03-16 09:04:13', '2024-03-16 09:04:13', 1, 10),
(11, 'OLED6.1\"Super Retina XDR', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 1),
(12, 'iOS 15', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 2),
(13, '2 camera 12 MP', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 3),
(14, ' 12 MP', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 4),
(15, 'Apple A14 Bionic', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 5),
(16, '4 GB', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 6),
(17, '64 GB', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 7),
(18, '1 Nano SIM & 1 eSIMHỗ trợ 5G', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 8),
(19, '2815 mAh20 W', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 9),
(20, 'iPhone (Apple)', '2024-03-16 09:04:23', '2024-03-16 09:04:23', 2, 10),
(21, 'OLED6.1\"Super Retina XDR', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 1),
(22, 'iOS 15', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 2),
(23, '2 camera 12 MP', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 3),
(24, ' 12 MP', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 4),
(25, 'Apple A14 Bionic', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 5),
(26, '4 GB', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 6),
(27, '128 GB', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 7),
(28, '1 Nano SIM & 1 eSIMHỗ trợ 5G', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 8),
(29, '2815 mAh20 W', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 9),
(30, 'iPhone (Apple)', '2024-03-16 09:04:34', '2024-03-16 09:04:34', 3, 10),
(31, 'OLED6.1\"Super Retina XDR', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 1),
(32, 'iOS 15', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 2),
(33, '2 camera 12 MP', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 3),
(34, ' 12 MP', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 4),
(35, 'Apple A14 Bionic', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 5),
(36, '4 GB', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 6),
(37, '128 GB', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 7),
(38, '1 Nano SIM & 1 eSIMHỗ trợ 5G', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 8),
(39, '2815 mAh20 W', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 9),
(40, 'iPhone (Apple)', '2024-03-16 09:04:38', '2024-03-16 09:04:38', 4, 10),
(41, 'Apple M1', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 11),
(42, '8 GB', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 12),
(43, '256 GB SSD', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 13),
(44, '13.3\"Retina (2560 x 1600)', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 14),
(45, 'Card tích hợp7 nhân GPU', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 15),
(46, 'Jack tai nghe 3.5 mm2 x Thunderbolt 3 (USB-C)', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 16),
(47, 'Có đèn bàn phím', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 17),
(48, 'macOS', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 18),
(49, 'Vỏ kim loại nguyên khối', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 19),
(50, 'Dài 304.1 mm - Rộng 212.4 mm - Dày 4.1 mm đến 16.1 mm - Nặng 1.29 kg', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 20),
(51, '2020', '2024-03-16 09:20:01', '2024-03-16 09:20:01', 5, 21),
(52, 'Apple M1', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 11),
(53, '8 GB', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 12),
(54, '256 GB SSD', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 13),
(55, '13.3\"Retina (2560 x 1600)', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 14),
(56, 'Card tích hợp7 nhân GPU', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 15),
(57, 'Jack tai nghe 3.5 mm2 x Thunderbolt 3 (USB-C)', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 16),
(58, 'Có đèn bàn phím', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 17),
(59, 'macOS', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 18),
(60, 'Vỏ kim loại nguyên khối', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 19),
(61, 'Dài 304.1 mm - Rộng 212.4 mm - Dày 4.1 mm đến 16.1 mm - Nặng 1.29 kg', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 20),
(62, '2020', '2024-03-16 09:20:08', '2024-03-16 09:20:08', 6, 21),
(63, '10.9\"Retina IPS LCD', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 22),
(64, 'iPadOS 15', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 23),
(65, 'Apple M1', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 24),
(66, '8 GB', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 25),
(67, '64 GB', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 26),
(68, 'Nghe gọi qua FaceTime', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 27),
(69, ' 12 MP', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 28),
(70, '12 MP', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 29),
(71, '28.6 Wh (~ 7587 mAh)20 W', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 30),
(72, 'iPad (Apple)', '2024-03-16 09:36:24', '2024-03-16 09:36:24', 7, 31),
(73, '10.9\"Retina IPS LCD', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 22),
(74, 'iPadOS 15', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 23),
(75, 'Apple M1', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 24),
(76, '8 GB', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 25),
(77, '64 GB', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 26),
(78, 'Nghe gọi qua FaceTime', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 27),
(79, ' 12 MP', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 28),
(80, '12 MP', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 29),
(81, '28.6 Wh (~ 7587 mAh)20 W', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 30),
(82, 'iPad (Apple)', '2024-03-16 09:37:06', '2024-03-16 09:37:06', 8, 31),
(83, 'Dùng 26 giờ - Sạc 1.5 giờ', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 32),
(84, 'Type-C', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 33),
(85, 'macOS, Android, iOS, Windows', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 34),
(86, 'Tương thích trợ lý ảo, Có mic thoại', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 35),
(87, 'Bluetooth 5.3', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 36),
(88, 'Phím nhấn', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 37),
(89, 'HAVIT', '2024-03-16 10:13:31', '2024-03-16 10:13:31', 9, 38);

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `avatar`, `createdAt`, `updatedAt`, `category_id`) VALUES
(1, 'iPhone', '/img/imgUpload/logo_iphone.png', '2024-03-16 07:51:11', '2024-03-16 07:51:11', 1),
(2, 'Xiaomi', '/img/imgUpload/logo_xiaomi.png', '2024-03-16 07:51:33', '2024-03-16 07:51:33', 1),
(3, 'Realme', '/img/imgUpload/logo_realme.png', '2024-03-16 07:51:46', '2024-03-16 07:51:46', 1),
(4, 'Samsung', '/img/imgUpload/logo_samsung.png', '2024-03-16 07:52:02', '2024-03-16 07:52:02', 1),
(5, 'OPPO', '/img/imgUpload/logo_oppo.jpg', '2024-03-16 07:52:20', '2024-03-16 07:52:20', 1),
(6, 'Vivo', '/img/imgUpload/logo_vivo.png', '2024-03-16 07:52:36', '2024-03-16 07:52:36', 1),
(7, 'Acer', '/img/imgUpload/logo_acer.png', '2024-03-16 07:54:10', '2024-03-16 07:54:10', 2),
(8, 'Asus', '/img/imgUpload/logo_asus.png', '2024-03-16 07:54:19', '2024-03-16 07:54:19', 2),
(9, 'Dell', '/img/imgUpload/logo_dell.png', '2024-03-16 07:54:29', '2024-03-16 07:54:29', 2),
(10, 'MacBook', '/img/imgUpload/logo_macbook.png', '2024-03-16 07:54:43', '2024-03-16 07:54:43', 2),
(11, 'Msi', '/img/imgUpload/logo_msi.png', '2024-03-16 07:54:59', '2024-03-16 07:54:59', 2),
(12, 'iPad', '/img/imgUpload/iPad-(Apple)522-b_4.jpg', '2024-03-16 07:57:00', '2024-03-16 07:57:00', 3),
(13, 'Lenovo', '/img/imgUpload/Lenovo522-b_6.jpg', '2024-03-16 07:57:10', '2024-03-16 07:57:10', 3),
(14, 'OPPO', '/img/imgUpload/OPPO-logo-lon-220x48.jpg', '2024-03-16 07:57:23', '2024-03-16 07:57:23', 3),
(15, 'Samsung', '/img/imgUpload/samsungnew-220x48-3.png', '2024-03-16 07:57:34', '2024-03-16 07:57:34', 3),
(16, 'Xiaomi', '/img/imgUpload/Tablet-xiaomi-220x48-1.png', '2024-03-16 07:57:45', '2024-03-16 07:57:45', 3),
(17, 'Apple watch', '/img/imgUpload/log_Apple.png', '2024-03-16 07:58:47', '2024-03-16 07:58:47', 4),
(18, 'Amazfit', '/img/imgUpload/logo_amazfit.png', '2024-03-16 07:59:09', '2024-03-16 07:59:09', 4),
(19, 'Apple', '/img/imgUpload/Apple54-b_5.jpg', '2024-03-16 10:04:39', '2024-03-16 10:04:39', 8),
(20, 'Asus', '/img/imgUpload/Asus54-b_23.png', '2024-03-16 10:04:49', '2024-03-16 10:04:49', 8),
(21, 'HAVIT', '/img/imgUpload/havit-220x48-3.png', '2024-03-16 10:06:02', '2024-03-16 10:06:02', 8);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `variation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `quantity`, `active`, `createdAt`, `updatedAt`, `variation_id`, `user_id`) VALUES
(3, 1, 1, '2024-04-17 02:24:50', '2024-04-21 03:32:23', 1, 1),
(5, 1, 0, '2024-04-21 03:32:14', '2024-04-21 03:32:14', 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Điện thoại', '2024-03-16 07:31:57', '2024-03-16 07:31:57'),
(2, 'Laptop', '2024-03-16 07:32:25', '2024-03-16 07:32:25'),
(3, ' Tablet', '2024-03-16 07:32:37', '2024-03-16 07:32:37'),
(4, 'Smartwatch', '2024-03-16 07:33:22', '2024-03-16 07:33:22'),
(5, 'Sạc dự phòng', '2024-03-16 07:33:53', '2024-03-16 07:33:53'),
(6, 'Đầu sạc', '2024-03-16 07:34:43', '2024-03-16 07:34:43'),
(7, 'Cáp sạc', '2024-03-16 07:34:57', '2024-03-16 07:34:57'),
(8, 'Tai nghe', '2024-03-16 07:35:57', '2024-03-16 07:35:57'),
(9, 'Loa', '2024-03-16 07:36:04', '2024-03-16 07:36:04'),
(10, 'Ốp lưng điện thoại', '2024-03-16 07:37:39', '2024-03-16 07:37:39'),
(11, 'Ốp lưng máy tính bảng', '2024-03-16 07:37:53', '2024-03-16 07:37:53');

-- --------------------------------------------------------

--
-- Table structure for table `combinations`
--

CREATE TABLE `combinations` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `option_value_id` int(11) DEFAULT NULL,
  `variation_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `combinations`
--

INSERT INTO `combinations` (`id`, `createdAt`, `updatedAt`, `option_value_id`, `variation_id`) VALUES
(1, '2024-03-16 08:45:53', '2024-03-16 08:45:53', 7, 1),
(2, '2024-03-16 08:45:54', '2024-03-16 08:45:54', 9, 1),
(3, '2024-03-16 08:51:21', '2024-03-16 08:51:21', 7, 2),
(4, '2024-03-16 08:51:21', '2024-03-16 08:51:21', 10, 2),
(5, '2024-03-16 08:57:33', '2024-03-16 08:57:33', 8, 3),
(6, '2024-03-16 08:57:33', '2024-03-16 08:57:33', 9, 3),
(7, '2024-03-16 08:59:04', '2024-03-16 08:59:04', 8, 4),
(8, '2024-03-16 08:59:04', '2024-03-16 08:59:04', 10, 4),
(9, '2024-03-16 09:15:30', '2024-03-16 09:15:30', 11, 5),
(10, '2024-03-16 09:16:48', '2024-03-16 09:16:48', 12, 6),
(11, '2024-03-16 09:31:06', '2024-03-16 09:31:06', 13, 7),
(12, '2024-03-16 09:33:26', '2024-03-16 09:33:26', 14, 8),
(13, '2024-03-16 10:10:17', '2024-03-16 10:10:17', 15, 9);

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `createdAt`, `updatedAt`, `product_id`, `user_id`) VALUES
(1, '2024-04-16 12:39:15', '2024-04-16 12:39:15', 1, 1),
(15, '2024-04-17 03:36:56', '2024-04-17 03:36:56', 2, 1),
(17, '2024-04-17 09:09:07', '2024-04-17 09:09:07', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `listimgs`
--

CREATE TABLE `listimgs` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `variation_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listimgs`
--

INSERT INTO `listimgs` (`id`, `url`, `createdAt`, `updatedAt`, `variation_id`) VALUES
(1, '/img/imgUpload/iphone-12-xanh-la-2-org.jpg', '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(2, '/img/imgUpload/iphone-12-xanh-la-3-org.jpg', '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(3, '/img/imgUpload/iphone-12-xanh-la-1-1-org.jpg', '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(4, '/img/imgUpload/iphone-12-xanh-la-5-1-org.jpg', '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(5, '/img/imgUpload/iphone-12-xanh-la-4-org.jpg', '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(6, '/img/imgUpload/iphone-12-do-3-org.jpg', '2024-03-16 08:51:21', '2024-03-16 08:51:21', 2),
(7, '/img/imgUpload/iphone-12-do-2-org.jpg', '2024-03-16 08:51:21', '2024-03-16 08:51:21', 2),
(8, '/img/imgUpload/iphone-12-do-1-1-org.jpg', '2024-03-16 08:51:21', '2024-03-16 08:51:21', 2),
(9, '/img/imgUpload/iphone-12-do-4-org.jpg', '2024-03-16 08:51:21', '2024-03-16 08:51:21', 2),
(10, '/img/imgUpload/iphone-12-xanh-la-2-org.jpg', '2024-03-16 08:57:33', '2024-03-16 08:57:33', 3),
(11, '/img/imgUpload/iphone-12-xanh-la-3-org.jpg', '2024-03-16 08:57:33', '2024-03-16 08:57:33', 3),
(12, '/img/imgUpload/iphone-12-xanh-la-1-1-org.jpg', '2024-03-16 08:57:33', '2024-03-16 08:57:33', 3),
(13, '/img/imgUpload/iphone-12-xanh-la-4-org.jpg', '2024-03-16 08:57:33', '2024-03-16 08:57:33', 3),
(14, '/img/imgUpload/iphone-12-xanh-la-5-1-org.jpg', '2024-03-16 08:57:33', '2024-03-16 08:57:33', 3),
(15, '/img/imgUpload/iphone-12-do-3-org.jpg', '2024-03-16 08:59:04', '2024-03-16 08:59:04', 4),
(16, '/img/imgUpload/iphone-12-do-2-org.jpg', '2024-03-16 08:59:04', '2024-03-16 08:59:04', 4),
(17, '/img/imgUpload/iphone-12-do-1-1-org.jpg', '2024-03-16 08:59:04', '2024-03-16 08:59:04', 4),
(18, '/img/imgUpload/iphone-12-do-4-org.jpg', '2024-03-16 08:59:04', '2024-03-16 08:59:04', 4),
(19, '/img/imgUpload/macbook-air-m1-2020-gold-05-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(20, '/img/imgUpload/macbook-air-m1-2020-gold-01-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(21, '/img/imgUpload/macbook-air-m1-2020-gold-02-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(22, '/img/imgUpload/macbook-air-m1-2020-gold-04-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(23, '/img/imgUpload/macbook-air-m1-2020-gold-03-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(24, '/img/imgUpload/macbook-air-m1-2020-gold-07-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(25, '/img/imgUpload/macbook-air-m1-2020-gold-06-org.jpg', '2024-03-16 09:15:30', '2024-03-16 09:15:30', 5),
(26, '/img/imgUpload/macbook-air-m1-2020-silver-04-org.jpg', '2024-03-16 09:16:48', '2024-03-16 09:16:48', 6),
(27, '/img/imgUpload/macbook-air-m1-2020-silver-05-org.jpg', '2024-03-16 09:16:48', '2024-03-16 09:16:48', 6),
(28, '/img/imgUpload/macbook-air-m1-2020-silver-01-org.jpg', '2024-03-16 09:16:49', '2024-03-16 09:16:49', 6),
(29, '/img/imgUpload/macbook-air-m1-2020-silver-02-org.jpg', '2024-03-16 09:16:49', '2024-03-16 09:16:49', 6),
(30, '/img/imgUpload/macbook-air-m1-2020-silver-03-org.jpg', '2024-03-16 09:16:49', '2024-03-16 09:16:49', 6),
(31, '/img/imgUpload/macbook-air-m1-2020-silver-06-org.jpg', '2024-03-16 09:16:49', '2024-03-16 09:16:49', 6),
(32, '/img/imgUpload/ipad-air-5-m1-xanh-duong-1.jpg', '2024-03-16 09:31:06', '2024-03-16 09:31:06', 7),
(33, '/img/imgUpload/ipad-air-5-m1-xanh-duong-4.jpg', '2024-03-16 09:31:06', '2024-03-16 09:31:06', 7),
(34, '/img/imgUpload/ipad-air-5-m1-xanh-duong-2.jpg', '2024-03-16 09:31:06', '2024-03-16 09:31:06', 7),
(35, '/img/imgUpload/ipad-air-5-m1-xanh-duong-3.jpg', '2024-03-16 09:31:06', '2024-03-16 09:31:06', 7),
(36, '/img/imgUpload/ipad-air-5-m1-xam-1.jpg', '2024-03-16 09:33:26', '2024-03-16 09:33:26', 8),
(37, '/img/imgUpload/ipad-air-5-m1-xam-2.jpg', '2024-03-16 09:33:26', '2024-03-16 09:33:26', 8),
(38, '/img/imgUpload/ipad-air-5-m1-xam-3.jpg', '2024-03-16 09:33:26', '2024-03-16 09:33:26', 8),
(39, '/img/imgUpload/ipad-air-5-m1-xam-4.jpg', '2024-03-16 09:33:26', '2024-03-16 09:33:26', 8),
(40, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-2.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(41, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-1.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(42, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-3.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(43, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-4.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(44, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-20.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(45, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-5.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9),
(46, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-21.jpg', '2024-03-16 10:10:17', '2024-03-16 10:10:17', 9);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `name`, `createdAt`, `updatedAt`, `product_id`) VALUES
(4, 'Bộ nhớ', '2024-03-16 08:37:22', '2024-03-16 08:37:22', 1),
(5, 'Màu', '2024-03-16 08:37:33', '2024-03-16 08:37:33', 1),
(6, 'Màu', '2024-03-16 09:10:30', '2024-03-16 09:10:30', 2),
(7, 'Màu', '2024-03-16 09:25:47', '2024-03-16 09:25:47', 3),
(8, 'Màu', '2024-03-16 10:08:59', '2024-03-16 10:08:59', 4);

-- --------------------------------------------------------

--
-- Table structure for table `optionvalues`
--

CREATE TABLE `optionvalues` (
  `id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `option_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `optionvalues`
--

INSERT INTO `optionvalues` (`id`, `value`, `color_code`, `createdAt`, `updatedAt`, `option_id`) VALUES
(7, '64GB', NULL, '2024-03-16 08:37:50', '2024-03-16 08:37:50', 4),
(8, '128GB', NULL, '2024-03-16 08:37:57', '2024-03-16 08:37:57', 4),
(9, 'Xanh lá', '#00ff1e', '2024-03-16 08:38:41', '2024-03-16 08:38:41', 5),
(10, 'Đỏ', '#ff0000', '2024-03-16 08:38:52', '2024-03-16 08:38:52', 5),
(11, 'Vàng đồng', '#ffdcca', '2024-03-16 09:11:59', '2024-03-16 09:11:59', 6),
(12, 'Bạc', '#c0c1c6', '2024-03-16 09:12:43', '2024-03-16 09:12:43', 6),
(13, 'Xanh dương', '#99bece', '2024-03-16 09:26:37', '2024-03-16 09:26:37', 7),
(14, 'Đen', '#000000', '2024-03-16 09:26:48', '2024-03-16 09:26:48', 7),
(15, 'Đen', NULL, '2024-03-16 10:09:09', '2024-03-16 10:09:09', 8);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `order_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`id`, `avatar`, `name`, `quantity`, `price`, `createdAt`, `updatedAt`, `order_id`) VALUES
(1, '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-tb-600x600.jpg', 'Tai nghe Bluetooth Chụp Tai HAVIT H663BT Đen', 2, 430000, '2024-04-18 04:21:34', '2024-04-18 04:21:34', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `subtotal_price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `shiping` int(11) NOT NULL,
  `total_price` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT 1,
  `note` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `code`, `customer_name`, `phone_number`, `address`, `subtotal_price`, `discount`, `shiping`, `total_price`, `state`, `note`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'Y6CFCCJSQXXU', 'Tráng ', '0386640397', 'Lào Cai', 860000, 0, 34000, 860000, 1, NULL, '2024-04-18 04:21:34', '2024-04-18 04:21:34', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img_preview` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL DEFAULT '0',
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `img_preview`, `price`, `description`, `createdAt`, `updatedAt`, `category_id`, `brand_id`, `product_id`) VALUES
(1, 'iPhone 12', '/img/imgUpload/shopping.webp', '12000000-15000000', '<h3 class=\"ql-align-justify\"><strong>Trong những tháng cuối năm 2020,&nbsp;</strong><a href=\"https://www.thegioididong.com/apple\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\"><strong>Apple</strong></a><strong>&nbsp;đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone&nbsp;12&nbsp;series&nbsp;mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là&nbsp;</strong><a href=\"https://www.topzone.vn/iphone/iphone-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\"><strong>iPhone 12 64GB</strong></a><strong>.</strong></h3><h3 class=\"ql-align-justify\"><strong>Hiệu năng vượt xa mọi giới hạn</strong></h3><p class=\"ql-align-justify\">Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho iPhone 12 đó là&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/tim-hieu-ve-chip-apple-a14-bionic-tren-iphone-12-va-ipad-1290695\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">A14 Bionic</a>, được sản xuất trên tiến trình 5 nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên phiên bản tiền nhiệm&nbsp;<a href=\"https://www.thegioididong.com/dtdd/iphone-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">iPhone 11</a>.</p><p><br></p><p class=\"ql-align-justify\"><span style=\"color: rgb(51, 51, 51);\">Với CPU Apple A14 Bionic, bạn có thể dễ dàng trải nghiệm mọi tựa game với những pha chuyển cảnh mượt mà hay hàng loạt hiệu ứng đồ họa tuyệt đẹp ở mức đồ họa cao mà không lo tình trạng giật lag.</span></p><p class=\"ql-align-justify\"><span style=\"color: rgb(51, 51, 51);\">Chưa hết, Apple còn gây bất ngờ đến người dùng với hệ thống 5G lần đầu tiên được trang bị trên những chiếc&nbsp;</span><a href=\"https://www.thegioididong.com/dtdd-apple-iphone\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237); background-color: rgb(255, 255, 255);\">iPhone</a><span style=\"color: rgb(51, 51, 51);\">, cho tốc độ truyền tải dữ liệu nhanh hơn, ổn định hơn.</span></p><p class=\"ql-align-justify\"><span style=\"color: rgb(51, 51, 51);\">iPhone 12 sẽ chạy trên hệ điều hành iOS 15 (12/2021)&nbsp;với nhiều tính năng hấp dẫn như hỗ trợ Widget cũng như những nâng cấp tối ưu phần mềm đáng kể mang lại những trải nghiệm thú vị mới lạ đến người dùng.</span></p><h3 class=\"ql-align-justify\"><strong>Cụm camera không ngừng cải tiến</strong></h3><p class=\"ql-align-justify\">iPhone 12 được trang bị hệ thống camera kép bao gồm&nbsp;<a href=\"https://www.thegioididong.com/dtdd-camera-goc-rong\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">camera góc rộng</a>&nbsp;và camera siêu rộng có cùng độ phân giải là 12 MP, chế độ ban đêm (<a href=\"https://www.thegioididong.com/hoi-dap/che-do-chup-dem-night-mode-la-gi-907873\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Night Mode</a>) trên bộ đôi camera này cũng đã được nâng cấp về phần cứng lẫn thuật toán xử lý, khi chụp những bức ảnh thiếu sáng bạn sẽ nhận được kết quả ấn tượng với màu sắc, độ chi tiết rõ nét đáng kinh ngạc.</p><p class=\"ql-align-justify\"><span style=\"color: rgb(51, 51, 51);\">Bạn có thể khám phá thêm những tính năng của camera trên iPhone 12 như chế độ smart HDR 3 giúp cân bằng yếu tố ánh sáng trong ảnh, làm nổi bật chi tiết đối tượng và cây cối trong khi vẫn giữ được màu sắc phong phú của bầu trời ngay cả vào buổi trưa nắng gắt.</span></p><p class=\"ql-align-justify\">Chế độ chụp chân dung đã tốt nay còn tốt hơn trong việc làm mờ hậu cảnh một cách nghệ thuật để dồn hết sự tập trung vào đối tượng mà bạn muốn chụp.</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><span style=\"color: rgb(51, 51, 51);\">Sự lột xác đầy mạnh mẽ lần này của Apple không chỉ gây bất ngờ đến người dùng mà còn đánh dấu một kỷ nguyên mới trong nền phát triển smartphone Apple. Và đây cũng được xem là một trong những bộ series iPhone mà Apple đặt nhiều tâm huyết, mục đích và đầy tính năng mạnh mẽ chưa từng thấy.</span></p><p><br></p>', '2024-03-16 08:08:05', '2024-04-22 09:08:31', 1, 1, NULL),
(2, 'MacBook Air 13 inch M1 2020 7-core GPU', '/img/imgUpload/macbook-air-m1-2020-gold-600x600.jpg', '17000000-18000000', '<h3><strong>Laptop Apple MacBook Air M1 2020 thuộc dòng&nbsp;</strong><a href=\"https://www.thegioididong.com/laptop?g=cao-cap-sang-trong\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\"><strong>laptop cao cấp sang trọng</strong></a><strong>&nbsp;có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn.</strong></h3><h3><strong>Chip Apple M1 tốc độ xử lý nhanh gấp 3.5 lần thế hệ trước</strong></h3><p>Chiếc&nbsp;<a href=\"https://www.topzone.vn/mac\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">MacBook</a>&nbsp;này được trang bị con chip&nbsp;<a href=\"https://www.thegioididong.com/tin-tuc/apple-m1-la-gi-1305904\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Apple M1&nbsp;</a>được sản xuất độc quyền bởi Nhà Táo&nbsp;trên tiến trình&nbsp;<strong>5 nm</strong>,&nbsp;<strong>8 lõi</strong>&nbsp;bao gồm&nbsp;<strong>4 lõi</strong>&nbsp;tiết kiệm điện và&nbsp;<strong>4 lõi</strong>&nbsp;hiệu suất cao, mang đến một hiệu năng kinh ngạc, xử lý mọi tác vụ văn phòng một cách mượt mà như Word, Excel, Powerpoint,... thực hiện tốt các nhiệm vụ chỉnh sửa hình ảnh, kết xuất 2D trên các phần mềm Photoshop, AI,... máy còn hỗ trợ tiết kiệm được điện năng cao.</p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Đi cùng CPU là card đồ họa tích hợp&nbsp;</span><strong style=\"color: rgb(51, 51, 51);\">7 nhân GPU</strong><span style=\"color: rgb(51, 51, 51);\">&nbsp;có hiệu năng vượt trội sau nhiều bài thử nghiệm hiệu năng đồ họa của benchmark, bạn có thể sử dụng nhiều phần mềm đồ họa chuyên nghiệp, thoả sức sáng tạo nội dung, render video ổn định với chất lượng hình ảnh cao.</span></p><p><a href=\"https://www.thegioididong.com/laptop-apple-macbook-air\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">MacBook Air</a>&nbsp;được trang bị&nbsp;<strong>RAM 8 GB</strong>&nbsp;cho khả năng đa nhiệm cao, bạn có thể mở cùng lúc nhiều cửa sổ hoặc ứng dụng để phục vụ cho công việc, giải trí của mình ví dụ như vừa mở Chrome tra cứu thông tin vừa mở Word để làm việc cực kỳ tiện lợi mà không cần lo lắng là máy sẽ bị đơ.</p><p><a href=\"https://www.thegioididong.com/laptop-apple-macbook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">MacBook&nbsp;</a>sở hữu ổ cứng&nbsp;<strong>SSD 256 GB</strong>&nbsp;cho tốc độ xử lý nhanh chóng, thao tác cuộn trong Safari cực mượt, đánh thức máy đang trong chế độ ngủ chỉ mất vài giây và đem đến không gian lưu trữ rộng rãi bạn cứ thoải mái lưu lại những bộ phim hay mà không lo nó sẽ chiếm chỗ của các tệp tài liệu công việc.</p><p>Bên cạnh sử dụng con chip mới Apple còn ra mắt phiên bản hệ điều hành&nbsp;<strong>macOS Big Sur</strong>&nbsp;với giao diện hoàn hảo hơn, các chuyển động cuộn, phóng to và chuyển tiếp màn hình mượt mà. Ngoài đổi mới giao diện&nbsp;<strong>macOS Big Sur</strong>&nbsp;còn mang đến khả năng phản hồi nhanh chóng và kho ứng dụng khổng lồ.</p><p>Xem thêm:&nbsp;<a href=\"https://www.thegioididong.com/game-app/danh-sach-ung-dung-chay-duoc-tren-macbook-chip-apple-m1-1310311\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Danh sách ứng dụng chạy được trên Macbook chip Apple M1</a>.</p><p><br></p><h3><strong>Thiết kế sang trọng, tinh tế</strong></h3><p><a href=\"https://www.topzone.vn/mac/apple-macbook-air-2020-mgn63saa\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">MacBook Air&nbsp;M1 256GB 2020</a>&nbsp;không những thừa hưởng thiết kế mỏng nhẹ, hiện đại của các thế hệ trước mà còn học hỏi thêm phong cách hiện đại của các dòng Macbook Pro. Khối lượng máy chỉ vỏn vẹn&nbsp;<strong>1.29 kg</strong>&nbsp;và mỏng của thân máy là&nbsp;<strong>16.1 mm</strong>&nbsp;có tính cơ động cao, dễ đem theo xử lý công việc.</p><p>Vỏ máy được thiết kế nguyên khối từ nguyên liệu nhôm tái chế 100% vừa góp phần bảo vệ môi trường vừa cho độ bền cao, chịu va đập tốt bảo vệ các linh kiện bên trong an toàn nếu có xảy ra va chạm mạnh.</p><p><a href=\"https://www.topzone.vn/macbook-air\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">MacBook Air M1</a>&nbsp;được trang bị camera&nbsp;<strong>FaceTime HD</strong>&nbsp;giúp bạn gọi video cho người thân, bạn bè với chất lượng hiển thị cao. Tích hợp dãy&nbsp;<strong>3 micro</strong>&nbsp;giúp truyền tải giọng nói của bạn chính xác hơn.&nbsp;</p><p><a href=\"https://www.thegioididong.com/laptop/apple-macbook-air-2020-mgn63saa\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Laptop Apple MacBook Air M1 2020</a>&nbsp;với hiệu năng mạnh mẽ đáp ứng tốt mọi công việc, thiết kế cực mỏng sẽ là sự lựa chọn tuyệt vời dành cho bạn.</p>', '2024-03-16 09:10:21', '2024-03-16 09:10:21', 2, 10, NULL),
(3, 'iPad Air 5 M1 WiFi 64GB', '/img/imgUpload/ipad-air-5-wifi-grey-thumb-600x600.jpg', '14500000', '<h3 class=\"ql-align-justify\"><a href=\"https://www.thegioididong.com/may-tinh-bang/ipad-air-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(21, 94, 193);\"><strong>iPad Air 5 M1 WiFi 64 GB</strong></a><strong>&nbsp;đã được công bố tại sự kiện Peek Performance diễn ra hôm 9/3 (theo giờ Việt Nam). Năm nay&nbsp;</strong><a href=\"https://www.thegioididong.com/may-tinh-bang-apple-ipad\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\"><strong>Apple</strong></a><strong>&nbsp;đã có những thay đổi lớn về cả hiệu năng và bổ sung màu sắc mới cho thiết bị.</strong></h3><h3 class=\"ql-align-justify\"><strong>Sức mạnh từ con chip M1</strong></h3><p class=\"ql-align-justify\">Apple M1 8 nhân là vi xử lý do chính Apple nghiên cứu và sản xuất. Con chip này đã được chứng minh sức mạnh qua nhiều dòng sản phẩm và bây giờ đã xuất hiện trên iPad Air 5 M1 WiFi 64 GB. Với 8 nhân CPU, vi xử lý này sẽ giúp thiết bị có thể hoạt động ổn định cùng với&nbsp;<a href=\"https://www.thegioididong.com/may-tinh-bang-ram-8gb\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">RAM 8 GB</a>.&nbsp;</p><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\"><strong>Thiết kế sang trọng</strong></h3><p><span style=\"color: rgb(51, 51, 51);\">iPad Air 5 M1 WiFi 64 GB có thiết kế phẳng ở 4 cạnh, mặt sau được làm từ nhôm với nhiều màu sắc tươi trẻ. Đặc biệt, năm nay Apple đã bổ sung màu tím cho dòng&nbsp;</span><a href=\"https://www.thegioididong.com/may-tinh-bang-apple-ipad-air\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237); background-color: rgb(255, 255, 255);\">iPad Air</a><span style=\"color: rgb(51, 51, 51);\">, màu sắc này sẽ gây ấn tượng mạnh khi chúng ta cầm máy sử dụng. Màn hình của máy cũng được làm phẳng với kích thước 10.9 inch.</span></p><h3 class=\"ql-align-justify\"><strong>Tính năng đặc biệt</strong></h3><p class=\"ql-align-justify\">iPad Air 5 M1&nbsp;WiFi&nbsp;64 GB có nhiều tính năng đặc biệt: Kết nối Apple Pencil 2, Kết nối bàn phím rời, Micro kép, Mở khóa bằng vân tay, Nam châm và sạc cho Apple Pencil.</p><p class=\"ql-align-justify\">Tổng kết lại với những người thích xem phim nghe nhạc, lướt mạng xã hội giải trí trên một thiết bị màn hình to thì đây là 1 trong những&nbsp;<a href=\"https://www.thegioididong.com/may-tinh-bang\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">máy tính bảng</a>&nbsp;đáng chú ý.</p><p><br></p>', '2024-03-16 09:25:39', '2024-03-16 09:25:39', 3, 12, NULL),
(4, 'Tai nghe Bluetooth Chụp Tai HAVIT H663BT', '/img/imgUpload/tai-nghe-bluetooth-chup-tai-havit-h663bt-tb-600x600.jpg', '430000', '<h3><a href=\"https://www.thegioididong.com/tai-nghe/tai-nghe-bluetooth-chup-tai-havit-h663bt\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\"><strong>Tai nghe Bluetooth Chụp Tai HAVIT H663BT</strong></a><strong>&nbsp;sở hữu thiết kế tối giản, thanh lịch, đi kèm cụm đèn LED RGB độc đáo. Bên cạnh đó, tai nghe cũng mang chất âm sống động, hỗ trợ kết nối không dây nhanh chóng, mic thoại rõ ràng,... đáp ứng tốt nhu cầu sử dụng cơ bản của người dùng.</strong></h3><p>•&nbsp;&nbsp;<a href=\"https://www.thegioididong.com/tai-nghe-havit\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Tai nghe HAVIT</a>&nbsp;mang thiết kế dạng over-ear với đệm tai êm ái, không gây đau tai khi sử dụng lâu. Đèn LED RGB cá tính tạo sự nổi bật, thu hút trong mọi không gian.</p><p>•&nbsp;<a href=\"https://www.thegioididong.com/tai-nghe\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Tai nghe</a>&nbsp;được hoàn thiện từ nhựa nhám mờ giúp hạn chế bám mồ hôi và dấu vân tay, dễ dàng vệ sinh. Bạn cũng có thể gấp gọn tai nghe này một cách linh hoạt để mang theo ở bất cứ đâu.&nbsp;</p><p>•&nbsp;Chất âm sống động, mạnh mẽ mang đến cho bạn không gian giải trí thư giãn, những buổi tiệc âm nhạc tuyệt vời.</p><p>•&nbsp;Với mic thoại được tích hợp, bạn có thể dùng tai nghe để tham gia các cuộc gọi/cuộc họp trực tuyến với khả năng thu âm rõ ràng, đáp ứng tốt nhu cầu học tập, làm việc và giải trí.</p><p>•&nbsp;<a href=\"https://www.thegioididong.com/tai-nghe-over-ear\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(47, 128, 237);\">Tai nghe over-ear</a>&nbsp;hỗ trợ kết nối không dây nhanh chóng và ổn định với các thiết bị khác nhờ công nghệ Bluetooth 5.3. Ngoài ra, bạn cũng có thể chuyển thành tai nghe có dây khi dùng kèm dây nối 3.5 mm được trang bị kèm theo.</p><p>•&nbsp;Thỏa sức tận hưởng âm nhạc mà không lo gián đoạn với thời lượng nghe nhạc lên đến 26 giờ và chỉ mất khoảng 1.5 giờ để sạc đầy lại.</p>', '2024-03-16 10:08:28', '2024-03-16 10:08:28', 8, 21, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `num_rating` int(11) NOT NULL DEFAULT 0,
  `average_rate` float NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `num_rating`, `average_rate`, `createdAt`, `updatedAt`, `product_id`) VALUES
(1, 1, 5, '2024-03-16 08:08:05', '2024-03-16 08:08:05', 1),
(2, 1, 5, '2024-03-16 09:10:21', '2024-03-16 09:10:21', 2),
(3, 1, 5, '2024-03-16 09:25:39', '2024-03-16 09:25:39', 3),
(4, 1, 5, '2024-03-16 10:08:28', '2024-03-16 10:08:28', 4);

-- --------------------------------------------------------

--
-- Table structure for table `refreshtokens`
--

CREATE TABLE `refreshtokens` (
  `id` int(11) NOT NULL,
  `refreshToken` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `refreshTokenId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `email`, `pass`, `avatar`, `role`, `createdAt`, `updatedAt`, `refreshTokenId`) VALUES
(1, 'Tráng', 'trang@gmail.com', '$2a$10$ZYsgLYrp1iBJAMp.wH7xKe5G9jxetsExXlQNNQH/cVivQHkajx/5y', '/img/imgHuman/avatar_22.jpg', 0, '2024-03-16 14:36:49', '2024-03-16 14:36:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `variations`
--

CREATE TABLE `variations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `SKU` varchar(255) NOT NULL,
  `qty_in_stock` int(11) NOT NULL DEFAULT 0,
  `import_price` int(11) NOT NULL,
  `price` varchar(255) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `variations`
--

INSERT INTO `variations` (`id`, `name`, `SKU`, `qty_in_stock`, `import_price`, `price`, `sale_price`, `createdAt`, `updatedAt`, `product_id`) VALUES
(1, 'Điện thoại iPhone 12 64GB Xanh Lá', 'DTIP1264XL', 100, 13000000, '14000000', 13500000, '2024-03-16 08:45:53', '2024-03-16 08:45:53', 1),
(2, 'Điện thoại iPhone 12 64GB Đỏ', 'DTIP1264D', 50, 13500000, '14500000', 14000000, '2024-03-16 08:51:21', '2024-03-16 08:51:21', 1),
(3, 'Điện thoại iPhone 12 128GB Xanh Lá', 'DTIP12128XL', 50, 14000000, '15000000', 14500000, '2024-03-16 08:57:33', '2024-03-16 08:57:33', 1),
(4, 'Điện thoại iPhone 12 128GB Đỏ', 'DTIP12128D', 50, 14500000, '15500000', 15000000, '2024-03-16 08:59:04', '2024-03-16 08:59:04', 1),
(5, 'Laptop Apple MacBook Air 13 inch M1 2020 Vàng Đồng', 'LAMA13IM12020VD', 50, 16500000, '17500000', 17000000, '2024-03-16 09:15:30', '2024-03-16 09:15:30', 2),
(6, 'Laptop Apple MacBook Air 13 inch M1 2020 Bạc', 'LAMA13IM12020B', 50, 17500000, '18500000', 18000000, '2024-03-16 09:16:48', '2024-03-16 09:16:48', 2),
(7, 'Máy tính bảng iPad Air 5 M1 WiFi 64GB Xanh Dương', 'MTBIAMW64XD', 50, 14000000, '15000000', 14500000, '2024-03-16 09:31:06', '2024-03-16 09:31:06', 3),
(8, 'Máy tính bảng iPad Air 5 M1 WiFi 64GB Đen', 'MTBIAMW64D', 50, 14000000, '15000000', 14500000, '2024-03-16 09:33:26', '2024-03-16 09:33:26', 3),
(9, 'Tai nghe Bluetooth Chụp Tai HAVIT H663BT Đen', 'TNBCTHHD', 50, 350000, '500000', 430000, '2024-03-16 10:10:17', '2024-03-16 10:10:17', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `attributevalues`
--
ALTER TABLE `attributevalues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variation_id` (`variation_id`),
  ADD KEY `attribute_id` (`attribute_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variation_id` (`variation_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `combinations`
--
ALTER TABLE `combinations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_value_id` (`option_value_id`),
  ADD KEY `variation_id` (`variation_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `listimgs`
--
ALTER TABLE `listimgs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variation_id` (`variation_id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `optionvalues`
--
ALTER TABLE `optionvalues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_id` (`option_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `refreshTokenId` (`refreshTokenId`);

--
-- Indexes for table `variations`
--
ALTER TABLE `variations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variations_ibfk_1` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `attributevalues`
--
ALTER TABLE `attributevalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `combinations`
--
ALTER TABLE `combinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `listimgs`
--
ALTER TABLE `listimgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `optionvalues`
--
ALTER TABLE `optionvalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `variations`
--
ALTER TABLE `variations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attributes`
--
ALTER TABLE `attributes`
  ADD CONSTRAINT `attributes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `attributevalues`
--
ALTER TABLE `attributevalues`
  ADD CONSTRAINT `attributevalues_ibfk_7` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `attributevalues_ibfk_8` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_7` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `combinations`
--
ALTER TABLE `combinations`
  ADD CONSTRAINT `combinations_ibfk_1` FOREIGN KEY (`option_value_id`) REFERENCES `optionvalues` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `combinations_ibfk_3` FOREIGN KEY (`option_value_id`) REFERENCES `optionvalues` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `combinations_ibfk_5` FOREIGN KEY (`option_value_id`) REFERENCES `optionvalues` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `combinations_ibfk_7` FOREIGN KEY (`option_value_id`) REFERENCES `optionvalues` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `combinations_ibfk_8` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `listimgs`
--
ALTER TABLE `listimgs`
  ADD CONSTRAINT `listimgs_ibfk_1` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `optionvalues`
--
ALTER TABLE `optionvalues`
  ADD CONSTRAINT `optionvalues_ibfk_1` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_10` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_11` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_12` FOREIGN KEY (`product_id`) REFERENCES `ratings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD CONSTRAINT `refreshtokens_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`refreshTokenId`) REFERENCES `refreshtokens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`refreshTokenId`) REFERENCES `refreshtokens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`refreshTokenId`) REFERENCES `refreshtokens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`refreshTokenId`) REFERENCES `refreshtokens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `variations`
--
ALTER TABLE `variations`
  ADD CONSTRAINT `variations_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

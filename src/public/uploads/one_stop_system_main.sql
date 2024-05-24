-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 03:56 AM
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
-- Database: `one_stop_system_main`
--

-- --------------------------------------------------------

--
-- Table structure for table `attribute_form_enum`
--

CREATE TABLE `attribute_form_enum` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `attributeFormServiceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attribute_form_enum`
--

INSERT INTO `attribute_form_enum` (`id`, `name`, `created_at`, `updated_at`, `attributeFormServiceId`) VALUES
(1, 'Chưa cập nhật, không thấy điểm học phần ', '2024-05-16 16:05:20.591375', '2024-05-16 16:05:20.591375', 1),
(2, ' Điểm trung bình học kỳ bị sai ', '2024-05-16 16:05:20.623494', '2024-05-16 16:05:20.623494', 1),
(3, ' Điểm trung bình tích lũy bị sai', '2024-05-16 16:05:20.628219', '2024-05-16 16:05:20.628219', 1);

-- --------------------------------------------------------

--
-- Table structure for table `attribute_form_service`
--

CREATE TABLE `attribute_form_service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attribute_form_service`
--

INSERT INTO `attribute_form_service` (`id`, `name`, `type`, `created_at`, `updated_at`, `serviceId`) VALUES
(1, 'Lý do', 'Checkbox', '2024-05-16 16:05:20.478696', '2024-05-16 16:05:20.478696', 3),
(2, 'Học kỳ', 'Input', '2024-05-16 16:05:20.634411', '2024-05-16 16:05:20.634411', 3),
(3, 'Đợt ', 'Input', '2024-05-16 16:05:20.685883', '2024-05-16 16:05:20.685883', 3),
(4, 'Lần thi ', 'Input', '2024-05-16 16:05:20.708457', '2024-05-16 16:05:20.708457', 3),
(5, 'Năm học ', 'Input', '2024-05-16 16:05:20.732506', '2024-05-16 16:05:20.732506', 3),
(6, 'Tên học phần/Mã học phần', 'Input', '2024-05-16 16:05:20.768922', '2024-05-16 16:05:20.768922', 3),
(7, 'Đã khảo thí/Chưa khảo thí', 'Input', '2024-05-16 16:05:20.814163', '2024-05-16 16:05:20.814163', 3),
(8, 'Tình trạng điểm', 'Input', '2024-05-16 16:05:20.835383', '2024-05-16 16:05:20.835383', 3),
(9, 'Lý do khác', 'Input', '2024-05-16 16:05:20.869491', '2024-05-16 16:05:20.869491', 3);

-- --------------------------------------------------------

--
-- Table structure for table `attribute_value`
--

CREATE TABLE `attribute_value` (
  `id` int(11) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `documentId` int(11) DEFAULT NULL,
  `attributeFormServiceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attribute_value`
--

INSERT INTO `attribute_value` (`id`, `value`, `created_at`, `updated_at`, `documentId`, `attributeFormServiceId`) VALUES
(1, '2', '2024-05-17 00:07:07.105143', '2024-05-17 00:07:07.105143', 1, 1),
(2, '1', '2024-05-17 00:07:07.103874', '2024-05-17 00:07:07.103874', 1, 1),
(3, '1', '2024-05-17 00:07:07.111900', '2024-05-17 00:07:07.111900', 1, 2),
(4, '1', '2024-05-17 00:07:07.113350', '2024-05-17 00:07:07.113350', 1, 4),
(5, '1', '2024-05-17 00:07:07.116971', '2024-05-17 00:07:07.116971', 1, 3),
(6, '2024', '2024-05-17 00:07:07.130330', '2024-05-17 00:07:07.130330', 1, 5),
(7, 'Không có', '2024-05-17 00:07:07.138476', '2024-05-17 00:07:07.138476', 1, 9),
(8, 'MHP1', '2024-05-17 00:07:07.139709', '2024-05-17 00:07:07.139709', 1, 6),
(9, '3', '2024-05-17 00:07:07.142151', '2024-05-17 00:07:07.142151', 1, 8),
(10, 'Chưa', '2024-05-17 00:07:07.141135', '2024-05-17 00:07:07.141135', 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Phòng Công tác Sinh viên', 'C1-101', '2024-02-26 11:13:42.268439', '2024-02-26 11:16:24.248933'),
(2, 'Phòng Kế hoạch tài chính', 'C1-102', '2024-02-26 11:18:41.151331', '2024-02-26 11:18:41.151331'),
(3, 'Phòng Đào tạo đại học', 'C1-103', '2024-02-26 11:21:36.435371', '2024-05-04 07:39:37.000000'),
(4, 'Phòng Hành chính - Tổng hợp', 'C1-104', '2024-02-26 11:24:18.645220', '2024-02-26 11:24:18.645220'),
(5, 'Bộ phận một cửa', 'C1-105', '2024-02-27 16:39:30.571222', '2024-02-27 16:39:59.420995');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `type_user` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `proceduralStepId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`id`, `status`, `description`, `address`, `type_user`, `user_id`, `created_at`, `updated_at`, `departmentId`, `serviceId`, `proceduralStepId`) VALUES
(1, 3, 'Đơn của bạn đã được xử lí. Vui lòng check email nhà trường gửi tới trong vòng 24 giờ', 'C1-105', 'student', 1, '2024-05-17 00:07:07.055000', '2024-05-17 15:17:09.970000', 3, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `document_activity_trace`
--

CREATE TABLE `document_activity_trace` (
  `id` int(11) NOT NULL,
  `status` enum('resolve','reject') NOT NULL,
  `officerId` int(11) DEFAULT NULL,
  `documentId` int(11) DEFAULT NULL,
  `proceduralStepId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `document_activity_trace`
--

INSERT INTO `document_activity_trace` (`id`, `status`, `officerId`, `documentId`, `proceduralStepId`) VALUES
(11, 'resolve', 4, 1, 4),
(12, 'resolve', 1, 1, 1),
(13, 'resolve', 5, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `name`) VALUES
(1, 'Công nghệ thông tin'),
(2, 'Tự động hóa'),
(3, 'Nghệ thuật và truyền thông'),
(4, 'Khoa học cơ bản'),
(5, 'Kinh tế và quản trị');

-- --------------------------------------------------------

--
-- Table structure for table `form_file`
--

CREATE TABLE `form_file` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1715833395545, 'InitDb1715833395545'),
(2, 1715847687594, 'UpdateNotificationTable1715847687594'),
(3, 1715851647543, 'UpdateNext1715851647543'),
(4, 1716222504240, 'CreateQuestionTable1716222504240'),
(5, 1716224963810, 'UpdateQuestionTable1716224963810');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `entity_type` varchar(255) NOT NULL,
  `entity_id` int(11) NOT NULL,
  `actor_identifier` varchar(255) NOT NULL,
  `notificationTypeId` int(11) DEFAULT NULL,
  `is_for_all` tinyint(4) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `entity_type`, `entity_id`, `actor_identifier`, `notificationTypeId`, `is_for_all`, `created_at`, `updated_at`) VALUES
(3, 'service', 3, 'DTO4801030041', 1, 1, '2024-05-16 16:27:50.323247', '2024-05-16 16:27:50.336428'),
(4, 'document', 1, 'DTC19H4801030042', 2, 0, '2024-05-17 00:07:07.178321', '2024-05-17 00:07:07.178321'),
(20, 'document', 1, 'DTO4801030042', 3, 0, '2024-05-17 15:19:35.026252', '2024-05-17 15:19:35.026252'),
(21, 'document', 1, 'DTO4801030042', 10, 0, '2024-05-17 15:19:45.783651', '2024-05-17 15:19:45.783651'),
(22, 'document', 1, 'DTO4801030041', 10, 0, '2024-05-17 15:20:42.087330', '2024-05-17 15:20:42.087330'),
(23, 'document', 1, 'DTO4801030043', 5, 0, '2024-05-17 15:21:48.998853', '2024-05-17 15:21:48.998853');

-- --------------------------------------------------------

--
-- Table structure for table `notification_receiver`
--

CREATE TABLE `notification_receiver` (
  `id` int(11) NOT NULL,
  `is_read` tinyint(4) NOT NULL DEFAULT 0,
  `type_user` varchar(255) NOT NULL,
  `notificationId` int(11) DEFAULT NULL,
  `receiver_identifier` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification_receiver`
--

INSERT INTO `notification_receiver` (`id`, `is_read`, `type_user`, `notificationId`, `receiver_identifier`, `created_at`, `updated_at`) VALUES
(10, 0, 'officer', 4, 'DTO4801030042', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000'),
(25, 0, 'student', 20, 'DTC19H4801030042', '2024-05-17 15:19:35.053167', '2024-05-17 15:19:35.053167'),
(26, 0, 'officer', 21, 'DTO4801030041', '2024-05-17 15:19:45.806492', '2024-05-17 15:19:45.806492'),
(27, 0, 'officer', 21, 'DTO4801030044', '2024-05-17 15:19:45.807690', '2024-05-17 15:19:45.807690'),
(28, 0, 'officer', 22, 'DTO4801030042', '2024-05-17 15:20:42.096647', '2024-05-17 15:20:42.096647'),
(29, 0, 'officer', 22, 'DTO4801030043', '2024-05-17 15:20:42.104256', '2024-05-17 15:20:42.104256'),
(30, 0, 'student', 23, 'DTC19H4801030042', '2024-05-17 15:21:49.021017', '2024-05-17 15:21:49.021017');

-- --------------------------------------------------------

--
-- Table structure for table `notification_type`
--

CREATE TABLE `notification_type` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification_type`
--

INSERT INTO `notification_type` (`id`, `type`) VALUES
(1, 'Đã thêm dịch vụ mới'),
(2, 'Đã đăng ký dịch vụ'),
(3, 'Đã xác nhận đơn của bạn'),
(4, 'Đã từ chối đơn của bạn'),
(5, 'Đã hoàn thành đơn của bạn'),
(6, 'Đã bình luận bài viết của bạn'),
(7, 'Đã trả lời bình luận của bạn'),
(8, 'Đã đăng câu hỏi cho bạn'),
(9, 'Đã đặt câu hỏi cho bạn'),
(10, 'Bạn có đơn cần xử lí');

-- --------------------------------------------------------

--
-- Table structure for table `officer`
--

CREATE TABLE `officer` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0,
  `address` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `officer`
--

INSERT INTO `officer` (`id`, `identifier`, `name`, `password`, `email`, `phone`, `isAdmin`, `address`, `gender`, `avatar`, `created_at`, `updated_at`, `departmentId`) VALUES
(1, 'DTO4801030041', 'Tráng', '$2b$10$WgdYxdQB6dQCFAML7ftMv.vtQKkH//1dc8GHu.RIf.qASLCa/T4LG', 'admin@ictu.edu.vn', '0386640397', 1, 'Lào cai', 'male', '/uploads/avatar_default.png', '0000-00-00 00:00:00.000000', '2024-05-17 00:04:12.842425', 3),
(4, 'DTO4801030042', 'Minh', '$2b$10$mJ7onUY4esk37RCzVAbxDeq1BzypMIuHLPd54GmaUOMiDRwY/Xuy2', 'seotrangbh24@gmail.com', '0386640397', 0, 'Thái nguyên', 'male', '/uploads/common/2.jpg', '2024-04-15 09:42:03.513000', '2024-05-09 10:30:39.588224', 5),
(5, 'DTO4801030043', 'Lý Nam Phương', '$2b$10$IyodnP.FbHbB27pYVh7RPeHmhqcwI95VXtGHsm2UnHf/lVT8BzlRm', 'phuong@ictu.edu.vn', '0386640397', 0, 'Yên bái', 'male', NULL, '2024-05-08 08:37:29.703202', '2024-05-17 08:53:29.745269', 5),
(6, 'DTO4801030044', 'Lô Quang Đại', '$2b$10$yRZh3j6JrYIhEuYPhmsDVuMiKLYAPlY1ub4SYvDbb0JJMu5fivt6a', 'dai@ictu.edu.vn', '0386640397', 0, 'Thái nguyên', 'male', '/uploads/common/11-2.jpg', '2024-05-08 10:11:03.763669', '2024-05-08 10:14:59.000000', 3);

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
(1, 20),
(1, 22),
(1, 23),
(4, 1),
(4, 2),
(4, 3),
(4, 5),
(4, 6),
(4, 8),
(4, 9),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(4, 16),
(4, 17),
(4, 18),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 16),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 14),
(6, 15),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(6, 20);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_comment`
--

CREATE TABLE `post_comment` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `media_content` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_media_content`
--

CREATE TABLE `post_media_content` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_reaction`
--

CREATE TABLE `post_reaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `procedural_step`
--

CREATE TABLE `procedural_step` (
  `id` int(11) NOT NULL,
  `step` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `procedural_step`
--

INSERT INTO `procedural_step` (`id`, `step`, `created_at`, `updated_at`, `departmentId`, `serviceId`) VALUES
(1, 2, '2024-05-16 16:05:20.527675', '2024-05-16 16:05:20.527675', 3, 3),
(2, 3, '2024-05-16 16:05:20.534380', '2024-05-16 16:05:20.534380', 5, 3),
(4, 1, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `departmentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `content`, `type_user`, `user_id`, `departmentId`) VALUES
(2, 'Khi nào thì có điểm thi học kì 2 năm 2024 ạ?', 'officer', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `question_media_content`
--

CREATE TABLE `question_media_content` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `type` enum('img','file') NOT NULL,
  `questionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question_media_content`
--

INSERT INTO `question_media_content` (`id`, `url`, `type`, `questionId`) VALUES
(3, '/uploads/common/cover_4.jpg', 'img', 2),
(4, '/uploads/common/cover_6.jpg', 'img', 2);

-- --------------------------------------------------------

--
-- Table structure for table `question_seen`
--

CREATE TABLE `question_seen` (
  `id` int(11) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `questionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `routerLink` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `nav_menu` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `label`, `routerLink`, `icon`, `parent_id`, `nav_menu`) VALUES
(1, 'Trang chủ', '/manager/dashboard', 'pi pi-home', NULL, 1),
(2, 'Cán bộ giảng viên', NULL, 'pi pi-users', NULL, 1),
(3, 'Tất cả', '/manager/admin/officer', NULL, 2, 1),
(4, 'Thêm cán bộ giảng viên', '/manager/admin/create-officer', NULL, 2, 1),
(5, 'Sinh viên', NULL, 'pi pi-fw pi-user', NULL, 1),
(6, 'Tất cả sinh viên', '/manager/admin/student', NULL, 5, 1),
(7, 'Thêm sinh viên', '/manager/admin/create-student', NULL, 5, 1),
(8, 'Dịch vụ', NULL, 'pi pi-fw pi-cog', NULL, 1),
(9, 'Tất cả dịch vụ', '/manager/admin/service', NULL, 8, 1),
(10, 'Thêm dịch vụ', '/manager/admin/create-service', NULL, 8, 1),
(11, 'Phòng ban', '/manager/admin/department', 'pi pi-fw pi-briefcase', NULL, 1),
(12, 'Thêm phòng ban', NULL, NULL, 11, 0),
(13, 'Biểu mẫu tự động', NULL, 'pi pi-file-pdf', NULL, 1),
(14, 'Tất cả', '/manager/admin/auto-form', NULL, 13, 1),
(15, 'Thêm biểu mẫu mới', '/manager/admin/create-auto-form', NULL, 13, 1),
(16, 'Thủ tục', '/manager/admin/document', 'pi pi-fw pi-file', NULL, 1),
(17, 'Hỏi đáp', '/manager/admin/post', 'pi pi-fw pi-comments', NULL, 1),
(18, 'Câu hỏi', '/manager/admin/question', 'pi pi-fw pi-question', NULL, 1),
(19, 'Xóa phòng ban', NULL, NULL, 11, 0),
(20, 'Sửa phòng ban', NULL, NULL, 11, 0),
(21, 'Bắt đầu lại đơn', NULL, 'pi pi-history', NULL, 0),
(22, 'Khóa tài khoản', NULL, 'pi pi-lock', NULL, 0),
(23, 'Phân quyền', '/manager/admin/rbac', 'pi pi-cog', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `time_handle` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`, `type`, `time_handle`, `description`, `created_at`, `updated_at`, `departmentId`) VALUES
(3, 'Đơn xin kiểm tra kết quả học tập', 'online, offline', '2 ngày', '<p class=\"ql-align-justify\"><strong>HỒ SƠ, THỦ TỤC</strong></p><p class=\"ql-align-justify\">1. Hồ sơ, thủ tục</p><p class=\"ql-align-justify\">Đơn đề nghị kiểm tra kết quả học tập (mẫu số 4, Phụ lục II; lấy tại Bộ phận một cửa; hoặc có thể tải file mềm từ cổng thông tin điện tử của Nhà trường, mục Bộ phận một cửa; điền thông tin và có đầy đủ chữ ký của các bên liên quan trừ các đơn vị trong Trường; trong đơn phải ghi rõ tình huống: đi thi chưa có điểm, đề nghị kiểm tra lại kết quả chấm thi...; ghi rõ tình trạng điểm, số báo danh, ca thi, ngày thi, đợt thi để Nhà trường kiểm tra, xử lý).</p><p class=\"ql-align-justify\"><strong>THỜI GIAN GIẢI QUYẾT</strong></p><p class=\"ql-align-justify\">2. Quy trình giải quyết</p><p class=\"ql-align-justify\">- Nộp hồ sơ tại Bộ phận một cửa, nhận lại giấy hẹn.</p><p class=\"ql-align-justify\">- Bộ phận một cửa kiểm tra và chuyển hồ sơ cho đơn vị chủ trì (Phòng ĐBCLGD hoặc Phòng Đào tạo Đại học tùy theo nội dung cần kiểm tra)</p><p class=\"ql-align-justify\">- Đơn vị chủ trì phối hợp với khoa chuyên môn để xử lý và trả kết quả qua email cho sinh viên và cho Bộ phận một cửa.</p><p class=\"ql-align-justify\">3. Thời gian giải quyết: 5 ngày làm việc kể từ khi nhận đơn.</p><p><br></p>', '2024-05-16 16:05:20.284662', '2024-05-16 16:05:20.284662', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `in_class` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `facultyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `identifier`, `name`, `password`, `batch`, `email`, `phone`, `in_class`, `address`, `gender`, `avatar`, `created_at`, `updated_at`, `facultyId`) VALUES
(1, 'DTC19H4801030042', 'Ma Seo Tráng', '$2b$10$WPZgrird.0R4NCaquRf.ruG7I/CPhYOPVHmW1JwNSY0d8SNTyLys6', '18', 'seotrangbh24@gmail.com', '0386640397', 'KTPM - K18A', 'Thải giàng phố - Bắc hà - Lào cai', 'male', '/uploads/common/1.jpg', '2024-04-15 09:05:29.692000', '2024-05-20 11:07:31.749066', 2),
(2, 'DTC19H4801030044', 'Nguyễn Văn Nam', '$2b$10$gpCFBkk0BbsOhps2d5O2qO5QlKz1aDmfszRW/2Eylk2P.PE5Ka8LO', '18', 'seotrangbh245@gmail.com', '0386640398', 'KTPM K18A', 'Điện Biên', 'male', '/uploads/common/2.jpg', '2024-05-04 08:41:52.767596', '2024-05-04 08:41:52.767596', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attribute_form_enum`
--
ALTER TABLE `attribute_form_enum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_db6f5036fca0a8ff7b66e43d85a` (`attributeFormServiceId`);

--
-- Indexes for table `attribute_form_service`
--
ALTER TABLE `attribute_form_service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1c576fe36bf8a92de40f8a41862` (`serviceId`);

--
-- Indexes for table `attribute_value`
--
ALTER TABLE `attribute_value`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_98a2967d8b070d283b464200151` (`documentId`),
  ADD KEY `FK_f23d86ebd6d26e00b50a83e4fd4` (`attributeFormServiceId`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bb4877b43fee4ddae558cd9037a` (`departmentId`),
  ADD KEY `FK_d75a7f2b436ae997168db2b31bf` (`serviceId`),
  ADD KEY `FK_f5e5f9874c2c69b3ecbb6332b5e` (`proceduralStepId`);

--
-- Indexes for table `document_activity_trace`
--
ALTER TABLE `document_activity_trace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d489bb3d48190c83617a09b7797` (`officerId`),
  ADD KEY `FK_17837d20d4ce084418e3bc8ef4c` (`documentId`),
  ADD KEY `FK_cd350df0baea392324963523848` (`proceduralStepId`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form_file`
--
ALTER TABLE `form_file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c9a74fea77723723f94869bf692` (`serviceId`),
  ADD KEY `FK_61b3ede9e53a3e0293518cc8dbc` (`departmentId`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_10743966c989299431e483fa780` (`notificationTypeId`);

--
-- Indexes for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3059a57127fb6b14dc2c2d195b9` (`notificationId`);

--
-- Indexes for table `notification_type`
--
ALTER TABLE `notification_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `officer`
--
ALTER TABLE `officer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_23e73cad42caf33d2b38e968e4c` (`departmentId`);

--
-- Indexes for table `officer_roles_role`
--
ALTER TABLE `officer_roles_role`
  ADD PRIMARY KEY (`officerId`,`roleId`),
  ADD KEY `IDX_1d723096d5579f576d8269deba` (`officerId`),
  ADD KEY `IDX_8cba317f8029863fb8ced75517` (`roleId`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c91b8eb1dc23fd5dae700265ed2` (`departmentId`);

--
-- Indexes for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c7fb3b0d1192f17f7649062f672` (`postId`);

--
-- Indexes for table `post_media_content`
--
ALTER TABLE `post_media_content`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_aaea8f6b6b6fe037df5846211fa` (`postId`);

--
-- Indexes for table `post_reaction`
--
ALTER TABLE `post_reaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5e7b98f3cea583c73a0bbbe0de1` (`postId`);

--
-- Indexes for table `procedural_step`
--
ALTER TABLE `procedural_step`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_da748edb0d12d7b468002ef37f6` (`departmentId`),
  ADD KEY `FK_c311fc49373579eb39b58b2f320` (`serviceId`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_36bebfea269ba10673a96f28e0b` (`departmentId`);

--
-- Indexes for table `question_media_content`
--
ALTER TABLE `question_media_content`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ca72e774ed4aa8794020ec3cf86` (`questionId`);

--
-- Indexes for table `question_seen`
--
ALTER TABLE `question_seen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_67a298289941ce6ac2df9326d1c` (`questionId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_4ea0bb0b22e0fbee8449e13a897` (`departmentId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_848c0779e2423d52fd964bbb793` (`facultyId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attribute_form_enum`
--
ALTER TABLE `attribute_form_enum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attribute_form_service`
--
ALTER TABLE `attribute_form_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `attribute_value`
--
ALTER TABLE `attribute_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `document_activity_trace`
--
ALTER TABLE `document_activity_trace`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `form_file`
--
ALTER TABLE `form_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `notification_type`
--
ALTER TABLE `notification_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `officer`
--
ALTER TABLE `officer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_comment`
--
ALTER TABLE `post_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_media_content`
--
ALTER TABLE `post_media_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_reaction`
--
ALTER TABLE `post_reaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `procedural_step`
--
ALTER TABLE `procedural_step`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `question_media_content`
--
ALTER TABLE `question_media_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `question_seen`
--
ALTER TABLE `question_seen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attribute_form_enum`
--
ALTER TABLE `attribute_form_enum`
  ADD CONSTRAINT `FK_db6f5036fca0a8ff7b66e43d85a` FOREIGN KEY (`attributeFormServiceId`) REFERENCES `attribute_form_service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `attribute_form_service`
--
ALTER TABLE `attribute_form_service`
  ADD CONSTRAINT `FK_1c576fe36bf8a92de40f8a41862` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `attribute_value`
--
ALTER TABLE `attribute_value`
  ADD CONSTRAINT `FK_98a2967d8b070d283b464200151` FOREIGN KEY (`documentId`) REFERENCES `document` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f23d86ebd6d26e00b50a83e4fd4` FOREIGN KEY (`attributeFormServiceId`) REFERENCES `attribute_form_service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FK_bb4877b43fee4ddae558cd9037a` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d75a7f2b436ae997168db2b31bf` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f5e5f9874c2c69b3ecbb6332b5e` FOREIGN KEY (`proceduralStepId`) REFERENCES `procedural_step` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `document_activity_trace`
--
ALTER TABLE `document_activity_trace`
  ADD CONSTRAINT `FK_17837d20d4ce084418e3bc8ef4c` FOREIGN KEY (`documentId`) REFERENCES `document` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_cd350df0baea392324963523848` FOREIGN KEY (`proceduralStepId`) REFERENCES `procedural_step` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d489bb3d48190c83617a09b7797` FOREIGN KEY (`officerId`) REFERENCES `officer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `form_file`
--
ALTER TABLE `form_file`
  ADD CONSTRAINT `FK_61b3ede9e53a3e0293518cc8dbc` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c9a74fea77723723f94869bf692` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `FK_10743966c989299431e483fa780` FOREIGN KEY (`notificationTypeId`) REFERENCES `notification_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `notification_receiver`
--
ALTER TABLE `notification_receiver`
  ADD CONSTRAINT `FK_3059a57127fb6b14dc2c2d195b9` FOREIGN KEY (`notificationId`) REFERENCES `notifications` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `officer`
--
ALTER TABLE `officer`
  ADD CONSTRAINT `FK_23e73cad42caf33d2b38e968e4c` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `officer_roles_role`
--
ALTER TABLE `officer_roles_role`
  ADD CONSTRAINT `FK_1d723096d5579f576d8269deba8` FOREIGN KEY (`officerId`) REFERENCES `officer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_8cba317f8029863fb8ced755173` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_c91b8eb1dc23fd5dae700265ed2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD CONSTRAINT `FK_c7fb3b0d1192f17f7649062f672` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `post_media_content`
--
ALTER TABLE `post_media_content`
  ADD CONSTRAINT `FK_aaea8f6b6b6fe037df5846211fa` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `post_reaction`
--
ALTER TABLE `post_reaction`
  ADD CONSTRAINT `FK_5e7b98f3cea583c73a0bbbe0de1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `procedural_step`
--
ALTER TABLE `procedural_step`
  ADD CONSTRAINT `FK_c311fc49373579eb39b58b2f320` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_da748edb0d12d7b468002ef37f6` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `FK_36bebfea269ba10673a96f28e0b` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `question_media_content`
--
ALTER TABLE `question_media_content`
  ADD CONSTRAINT `FK_ca72e774ed4aa8794020ec3cf86` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `question_seen`
--
ALTER TABLE `question_seen`
  ADD CONSTRAINT `FK_67a298289941ce6ac2df9326d1c` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `FK_4ea0bb0b22e0fbee8449e13a897` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_848c0779e2423d52fd964bbb793` FOREIGN KEY (`facultyId`) REFERENCES `faculties` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

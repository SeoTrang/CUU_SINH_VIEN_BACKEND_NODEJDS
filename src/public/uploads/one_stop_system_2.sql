-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 04:42 AM
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
-- Table structure for table `attribute_form_enum`
--

CREATE TABLE `attribute_form_enum` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `attributeFormServiceId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attribute_form_enum`
--

INSERT INTO `attribute_form_enum` (`id`, `name`, `attributeFormServiceId`, `created_at`, `updated_at`) VALUES
(1, ' Điểm trung bình học kỳ bị sai ', 6, '2024-03-27 09:25:29.596600', '2024-03-27 09:25:29.596600'),
(2, 'Chưa cập nhật, không thấy điểm học phần ', 6, '2024-03-27 09:25:29.597508', '2024-03-27 09:25:29.597508'),
(3, ' Điểm trung bình tích lũy bị sai ', 6, '2024-03-27 09:25:29.598639', '2024-03-27 09:25:29.598639');

-- --------------------------------------------------------

--
-- Table structure for table `attribute_form_service`
--

CREATE TABLE `attribute_form_service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attribute_form_service`
--

INSERT INTO `attribute_form_service` (`id`, `name`, `type`, `serviceId`, `created_at`, `updated_at`) VALUES
(1, 'Họ tên sinh viên', 'Input', 1, '2024-03-27 09:25:29.441696', '2024-03-27 09:25:29.441696'),
(2, 'Ngày sinh', 'Input', 1, '2024-03-27 09:25:29.458794', '2024-03-27 09:25:29.458794'),
(3, 'Mã sinh viên', 'Input', 1, '2024-03-27 09:25:29.479075', '2024-03-27 09:25:29.479075'),
(4, 'Số điện thoại', 'Input', 1, '2024-03-27 09:25:29.513875', '2024-03-27 09:25:29.513875'),
(5, 'Lớp quản lí sinh viên', 'Input', 1, '2024-03-27 09:25:29.527972', '2024-03-27 09:25:29.527972'),
(6, 'Lí do', 'Checkbox', 1, '2024-03-27 09:25:29.555917', '2024-03-27 09:25:29.555917'),
(7, 'Học kì', 'Input', 1, '2024-03-27 09:25:29.597147', '2024-03-27 09:25:29.597147'),
(8, 'Lần thi (nếu có)', 'Input', 1, '2024-03-27 09:25:29.620415', '2024-03-27 09:25:29.620415'),
(9, 'Năm học', 'Input', 1, '2024-03-27 09:25:29.634369', '2024-03-27 09:25:29.634369'),
(10, 'Tên học phần/Mã học phần', 'Input', 1, '2024-03-27 09:25:29.649032', '2024-03-27 09:25:29.649032'),
(11, 'Đã khảo thí/Chưa khảo thí', 'Input', 1, '2024-03-27 09:25:29.662321', '2024-03-27 09:25:29.662321'),
(12, 'Tình trạng điểm', 'Input', 1, '2024-03-27 09:25:29.674233', '2024-03-27 09:25:29.674233'),
(13, 'Lý do khác', 'Input', 1, '2024-03-27 09:25:29.683487', '2024-03-27 09:25:29.683487'),
(14, 'Họ tên sinh viên', 'Input', 2, '2024-03-27 09:30:00.894937', '2024-03-27 09:30:00.894937'),
(15, 'Ngày sinh', 'Input', 2, '2024-03-27 09:30:00.905169', '2024-03-27 09:30:00.905169'),
(16, 'Mã số sinh viên', 'Input', 2, '2024-03-27 09:30:00.916628', '2024-03-27 09:30:00.916628'),
(17, 'Số ĐT', 'Input', 2, '2024-03-27 09:30:00.934203', '2024-03-27 09:30:00.934203'),
(18, 'Lớp quản lý sinh viên', 'Input', 2, '2024-03-27 09:30:00.949957', '2024-03-27 09:30:00.949957'),
(19, 'Tên học phần', 'Input', 2, '2024-03-27 09:30:00.964722', '2024-03-27 09:30:00.964722'),
(20, 'Mã học phần', 'Input', 2, '2024-03-27 09:30:00.981273', '2024-03-27 09:30:00.981273'),
(21, 'Nhóm học phần', 'Input', 2, '2024-03-27 09:30:00.997746', '2024-03-27 09:30:00.997746'),
(22, 'Thi ở học kì', 'Input', 2, '2024-03-27 09:30:01.012809', '2024-03-27 09:30:01.012809'),
(23, 'Đợt (nếu có)', 'Input', 2, '2024-03-27 09:30:01.029073', '2024-03-27 09:30:01.029073'),
(24, 'Lần', 'Input', 2, '2024-03-27 09:30:01.044205', '2024-03-27 09:30:01.044205'),
(25, 'Năm học', 'Input', 2, '2024-03-27 09:30:01.055216', '2024-03-27 09:30:01.055216');

-- --------------------------------------------------------

--
-- Table structure for table `attribute_value`
--

CREATE TABLE `attribute_value` (
  `id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `documentId` int(11) DEFAULT NULL,
  `attributeFormServiceId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, 'Phòng Đào tạo đại học', 'C1-103', '2024-02-26 11:21:36.435371', '2024-02-26 11:21:36.435371'),
(4, 'Phòng Hành chính - Tổng hợp', 'C1-104', '2024-02-26 11:24:18.645220', '2024-02-26 11:24:18.645220'),
(5, 'Bộ phận một cửa', 'C1-105', '2024-02-27 16:39:30.571222', '2024-02-27 16:39:59.420995');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `type_user` varchar(255) NOT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `proceduralStepId` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

--
-- Dumping data for table `form_file`
--

INSERT INTO `form_file` (`id`, `link`, `serviceId`, `departmentId`) VALUES
(1, 'uploads/common/Mau 4 Đơn xin kiểm tra kết quả học tập sửa.doc', 1, 3),
(2, 'uploads/common/Mau 3 Đơn xin phúc khảo (2).doc', 2, 3);

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
(1, 1708869926800, 'CreateUserTable1708869926800'),
(2, 1708919580284, 'CreateDepartmentTable1708919580284'),
(3, 1708919809773, 'UpdateDateField1708919809773'),
(4, 1708933093646, 'CreatePostTable1708933093646'),
(5, 1708936035623, 'CreatePostMediaContentTable1708936035623'),
(6, 1708940811538, 'CreatePostMediaContentTable1708940811538'),
(7, 1708956918970, 'CreatePostCommentTable1708956918970'),
(8, 1708957513803, 'UpdateSomeFieldPostCommentTable1708957513803'),
(9, 1708961603502, 'CreatePostReactionTable1708961603502'),
(10, 1708999635175, 'CreateServiceTable1708999635175'),
(11, 1709005319880, 'CreateAttributeFormServiceTable1709005319880'),
(12, 1709020925539, 'CreateAttributeFormEnumTable1709020925539'),
(13, 1709023187541, 'CreateProceduralStepTable1709023187541'),
(14, 1709024741404, 'AddDescriptionFieldToServiceTable1709024741404'),
(15, 1709028422203, 'CreateDocumentTable1709028422203'),
(16, 1709028660165, 'UpdateDocumentTable1709028660165'),
(17, 1709028893530, 'UpdateDocumentTable21709028893530'),
(18, 1709083855141, 'CreateAttributeValueTable1709083855141'),
(19, 1709084166882, 'UpdateTimeFieldAllTable1709084166882'),
(20, 1709107655369, 'CreateOfficerAndRoleTable1709107655369'),
(21, 1709108496674, 'CreateFieldOfficerTable1709108496674'),
(22, 1709108777054, 'CreateFieldOfficerTable21709108777054'),
(23, 1711504331985, 'CreateDb1711504331985');

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
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `departmentId` int(11) DEFAULT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `officer`
--

INSERT INTO `officer` (`id`, `identifier`, `name`, `password`, `email`, `created_at`, `updated_at`, `departmentId`, `isAdmin`, `phone`, `address`, `gender`, `avatar`) VALUES
(1, 'DTO4801030041', 'Tráng', '$2b$10$WgdYxdQB6dQCFAML7ftMv.vtQKkH//1dc8GHu.RIf.qASLCa/T4LG', 'admin@ictu.edu.vn', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4, 1, '0386640397', 'Lào cai', 'male', '/uploads/avatar_default.png');

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
  `postId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_media_content`
--

CREATE TABLE `post_media_content` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_reaction`
--

CREATE TABLE `post_reaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `procedural_step`
--

CREATE TABLE `procedural_step` (
  `id` int(11) NOT NULL,
  `step` int(11) NOT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `procedural_step`
--

INSERT INTO `procedural_step` (`id`, `step`, `departmentId`, `serviceId`, `created_at`, `updated_at`) VALUES
(1, 2, 3, 1, '2024-03-27 09:25:29.723892', '2024-03-27 09:25:29.723892'),
(2, 1, 5, 1, '2024-03-27 09:25:29.724847', '2024-03-27 09:25:29.724847'),
(3, 3, 5, 1, '2024-03-27 09:25:29.726891', '2024-03-27 09:25:29.726891'),
(4, 1, 5, 2, '2024-03-27 09:30:01.094977', '2024-03-27 09:30:01.094977'),
(5, 2, 3, 2, '2024-03-27 09:30:01.095702', '2024-03-27 09:30:01.095702'),
(6, 3, 5, 2, '2024-03-27 09:30:01.097073', '2024-03-27 09:30:01.097073');

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
(20, 'Sửa phòng ban', NULL, NULL, 11, 0);

-- --------------------------------------------------------

--
-- Table structure for table `role_officers_officer`
--

CREATE TABLE `role_officers_officer` (
  `roleId` int(11) NOT NULL,
  `officerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `time_handle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`, `type`, `departmentId`, `description`, `created_at`, `updated_at`, `time_handle`) VALUES
(1, 'Kiểm tra kết quả học tập', 'online, offline', 3, '<h2>Kiểm tra kết quả học tập</h2><p class=\"ql-align-justify\"><strong>HỒ SƠ, THỦ TỤC</strong></p><p class=\"ql-align-justify\">1. Hồ sơ, thủ tục</p><p class=\"ql-align-justify\">Đơn đề nghị kiểm tra kết quả học tập (mẫu số 4, Phụ lục II; lấy tại Bộ phận một cửa; hoặc có thể tải file mềm từ cổng thông tin điện tử của Nhà trường, mục Bộ phận một cửa; điền thông tin và có đầy đủ chữ ký của các bên liên quan trừ các đơn vị trong Trường; trong đơn phải ghi rõ tình huống: đi thi chưa có điểm, đề nghị kiểm tra lại kết quả chấm thi...; ghi rõ tình trạng điểm, số báo danh, ca thi, ngày thi, đợt thi để Nhà trường kiểm tra, xử lý).</p><p class=\"ql-align-justify\"><strong>THỜI GIAN GIẢI QUYẾT</strong></p><p class=\"ql-align-justify\">2. Quy trình giải quyết</p><p class=\"ql-align-justify\">- Nộp hồ sơ tại Bộ phận một cửa, nhận lại giấy hẹn.</p><p class=\"ql-align-justify\">- Bộ phận một cửa kiểm tra và chuyển hồ sơ cho đơn vị chủ trì (Phòng ĐBCLGD hoặc Phòng Đào tạo Đại học tùy theo nội dung cần kiểm tra)</p><p class=\"ql-align-justify\">- Đơn vị chủ trì phối hợp với khoa chuyên môn để xử lý và trả kết quả qua email cho sinh viên và cho Bộ phận một cửa.</p><p class=\"ql-align-justify\">3. Thời gian giải quyết: 5 ngày làm việc kể từ khi nhận đơn.</p><p><br></p>', '2024-03-27 09:25:29.378692', '2024-03-27 09:25:29.378692', '5 ngày'),
(2, 'Phúc khảo điểm thi kết thúc học phần', 'online, offline', 3, '<h2>Phúc khảo điểm thi kết thúc học phần</h2><p class=\"ql-align-justify\"><strong>HỒ SƠ, THỦ TỤC</strong></p><p class=\"ql-align-justify\">1. Hồ sơ, thủ tục</p><p class=\"ql-align-justify\">- Đơn đề nghị phúc khảo điểm thi kết thúc học phần (mẫu số 3, Phụ lục II; lấy tại Bộ phận một cửa; hoặc có thể tải file mềm từ cổng thông tin điện tử của Nhà trường, mục Bộ phận một cửa; điền thông tin và có đầy đủ chữ ký của các bên liên quan trừ các đơn vị trong Trường; trong đơn phải ghi rõ tình huống: đi thi chưa có điểm, đề nghị kiểm tra lại kết quả chấm thi...; ghi rõ tình trạng điểm, số báo danh, ca thi, ngày thi, đợt thi để Nhà trường kiểm tra, xử lý).</p><p class=\"ql-align-justify\">- Nộp lệ phí 30.000đ/môn.</p><p class=\"ql-align-justify\"><strong>THỜI GIAN GIẢI QUYẾT</strong></p><p class=\"ql-align-justify\">2. Quy trình giải quyết</p><p class=\"ql-align-justify\">- Nộp đơn tại Bộ phận một cửa (chậm nhất là 10 ngày làm việc, kể từ ngày công bố điểm thi), nhận lại giấy hẹn;</p><p class=\"ql-align-justify\">- Bộ phận một cửa kiểm tra và chuyển hồ sơ cho Phòng ĐBCLGD.</p><p class=\"ql-align-justify\">- Phòng ĐBCLGD chủ trì phối hợp với khoa chuyên môn để xử lý và trả kết quả qua email cho sinh viên và cho Bộ phận một cửa.</p><p class=\"ql-align-justify\"><span style=\"color: windowtext; background-color: transparent;\">3. Thời gian giải quyết:&nbsp;</span>10 ngày làm việc kể từ khi nhận đơn.</p><p><br></p>', '2024-03-27 09:30:00.849276', '2024-03-27 09:30:00.849276', '5 ngày');

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
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `in_class` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `facultyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_officers_officer`
--
ALTER TABLE `role_officers_officer`
  ADD PRIMARY KEY (`roleId`,`officerId`),
  ADD KEY `IDX_77ef4a33fe0e7bd74cb7f96abf` (`roleId`),
  ADD KEY `IDX_b23c720b877a1307713bca79ef` (`officerId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `attribute_form_service`
--
ALTER TABLE `attribute_form_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `attribute_value`
--
ALTER TABLE `attribute_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `form_file`
--
ALTER TABLE `form_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `officer`
--
ALTER TABLE `officer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- Constraints for table `form_file`
--
ALTER TABLE `form_file`
  ADD CONSTRAINT `FK_61b3ede9e53a3e0293518cc8dbc` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c9a74fea77723723f94869bf692` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Constraints for table `role_officers_officer`
--
ALTER TABLE `role_officers_officer`
  ADD CONSTRAINT `FK_77ef4a33fe0e7bd74cb7f96abf0` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_b23c720b877a1307713bca79efe` FOREIGN KEY (`officerId`) REFERENCES `officer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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

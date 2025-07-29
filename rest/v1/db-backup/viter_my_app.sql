-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2025 at 09:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_my_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `my_app_contact`
--

CREATE TABLE `my_app_contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_fullname` varchar(128) NOT NULL,
  `contact_email` varchar(128) NOT NULL,
  `contact_message` text NOT NULL,
  `contact_created` datetime NOT NULL,
  `contact_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_contact`
--

INSERT INTO `my_app_contact` (`contact_aid`, `contact_fullname`, `contact_email`, `contact_message`, `contact_created`, `contact_updated`) VALUES
(1, 'gsgds', 'drdstg', 'styhsdthf', '2025-07-29 14:47:49', '2025-07-29 14:47:49'),
(2, 'sadrysertys', 'thsrthysrt', 'yusrtuhsrth', '2025-07-29 15:05:35', '2025-07-29 15:05:35'),
(3, 'taserts', 'dthsdths', 'rthjsrtjhsrtjh', '2025-07-29 15:08:25', '2025-07-29 15:08:25'),
(4, 'faSEd', 'zdfghzsdfg', 'zdfhdafh', '2025-07-29 15:09:33', '2025-07-29 15:09:33'),
(5, 'test', 'gtser', 'saeryer', '2025-07-29 15:11:46', '2025-07-29 15:11:46'),
(6, 'test', 'gtser', 'saeryer', '2025-07-29 15:12:46', '2025-07-29 15:12:46'),
(7, 'sdr', 'rtat', 'arytet', '2025-07-29 15:18:19', '2025-07-29 15:18:19'),
(8, 'raer', 'aEtaSEtfa', 'seegsaeg', '2025-07-29 15:19:23', '2025-07-29 15:19:23'),
(9, 'raer', 'aEtaSEtfa', 'seegsaeg', '2025-07-29 15:19:25', '2025-07-29 15:19:25'),
(10, 'raer', 'aEtaSEtfa', 'seegsaeg', '2025-07-29 15:19:49', '2025-07-29 15:19:49'),
(11, 'fawef', 'asgas', 'gasrga', '2025-07-29 15:20:11', '2025-07-29 15:20:11'),
(12, 'hsft', 'sery', 'sey', '2025-07-29 15:30:20', '2025-07-29 15:30:20'),
(13, 'eraer', 'aewtawet', 'aw tawert', '2025-07-29 15:35:57', '2025-07-29 15:35:57'),
(14, 'durt6', 'dsr6u7d', 'rt', '2025-07-29 15:36:46', '2025-07-29 15:36:46'),
(15, 'test', 'test', 'test', '2025-07-29 15:37:01', '2025-07-29 15:37:01');

-- --------------------------------------------------------

--
-- Table structure for table `my_app_header`
--

CREATE TABLE `my_app_header` (
  `header_aid` int(11) NOT NULL,
  `header_is_active` tinyint(1) NOT NULL,
  `header_name` varchar(50) NOT NULL,
  `header_link` text NOT NULL,
  `header_created` datetime NOT NULL,
  `header_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_header`
--

INSERT INTO `my_app_header` (`header_aid`, `header_is_active`, `header_name`, `header_link`, `header_created`, `header_updated`) VALUES
(1, 1, 'Home', '#home', '2025-07-25 12:33:13', '2025-07-25 14:18:20'),
(2, 1, 'About', '#about', '2025-07-25 12:33:47', '2025-07-25 14:18:37'),
(3, 1, 'Services', '#services', '2025-07-25 12:34:13', '2025-07-25 14:18:50'),
(4, 1, 'Contact', '#contact', '2025-07-25 12:34:29', '2025-07-25 14:19:03'),
(5, 1, 'Footer', '#footer', '2025-07-25 12:41:59', '2025-07-25 14:19:14'),
(18, 1, 'asfa', '#asfsaf', '2025-07-25 14:19:54', '2025-07-25 14:19:54');

-- --------------------------------------------------------

--
-- Table structure for table `my_app_test`
--

CREATE TABLE `my_app_test` (
  `test_aid` int(11) NOT NULL,
  `test_is_active` tinyint(1) NOT NULL,
  `test_name` varchar(128) NOT NULL,
  `test_created` datetime NOT NULL,
  `test_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_test`
--

INSERT INTO `my_app_test` (`test_aid`, `test_is_active`, `test_name`, `test_created`, `test_updated`) VALUES
(1, 1, 'My Name', '2025-07-21 03:34:07', '2025-07-21 03:34:07'),
(2, 1, 'Kim', '2025-07-21 04:26:16', '2025-07-21 04:26:16');

-- --------------------------------------------------------

--
-- Table structure for table `my_app_testimonials`
--

CREATE TABLE `my_app_testimonials` (
  `testimonials_aid` int(11) NOT NULL,
  `testimonials_is_active` int(1) NOT NULL,
  `testimonials_image` text NOT NULL,
  `testimonials_description` text NOT NULL,
  `testimonials_name` varchar(128) NOT NULL,
  `testimonials_position` text NOT NULL,
  `testimonials_created` datetime NOT NULL,
  `testimonials_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_testimonials`
--

INSERT INTO `my_app_testimonials` (`testimonials_aid`, `testimonials_is_active`, `testimonials_image`, `testimonials_description`, `testimonials_name`, `testimonials_position`, `testimonials_created`, `testimonials_updated`) VALUES
(1, 1, '../images/testimonials-1.webp', 'The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!', 'Sarah Johnson', 'Marketing Director, TechCorp', '2025-07-24 15:08:17', '2025-07-24 15:08:17'),
(2, 1, '../images/testimonials-2.webp', 'From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey.', 'Michael Chen', 'CEO, StartupHub', '2025-07-24 15:09:26', '2025-07-24 15:09:26'),
(3, 1, '../images/testimonials-3.webp', 'Their SEO strategy tripled our organic traffic in 6 months. We\'ve seen a dramatic improvement in lead quality and conversion rates.', 'Emma Rodriguez', 'CMO, GrowthSolutions', '2025-07-24 15:09:50', '2025-07-24 15:09:50');

-- --------------------------------------------------------

--
-- Table structure for table `my_app_web_services`
--

CREATE TABLE `my_app_web_services` (
  `web_services_aid` int(11) NOT NULL,
  `web_services_is_active` tinyint(1) NOT NULL,
  `web_services_name` varchar(128) NOT NULL,
  `web_services_description` text NOT NULL,
  `web_services_image` text NOT NULL,
  `web_services_link` text NOT NULL,
  `web_services_text_url` text NOT NULL,
  `web_services_created` datetime NOT NULL,
  `web_services_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_app_web_services`
--

INSERT INTO `my_app_web_services` (`web_services_aid`, `web_services_is_active`, `web_services_name`, `web_services_description`, `web_services_image`, `web_services_link`, `web_services_text_url`, `web_services_created`, `web_services_updated`) VALUES
(1, 1, 'Web Development', 'Custom websites built with modern frameworks like Next.js and React for optimal performance.', '/images/card-icon-web-development.webp', '#', 'View Packages', '2025-07-21 09:46:21', '2025-07-25 12:45:50'),
(2, 1, 'UI/UX Design', 'Beautiful interfaces designed to convert visitors with strategic user experience flows.', '/images/card-icon-ui-ux-design.webp', '#', 'See Portfolio', '2025-07-23 14:40:48', '2025-07-23 14:40:48'),
(3, 1, 'SEO Optimization', 'Increase your visibility on search engines with our data-driven SEO strategies.', '/images/card-icon-seo-optimization.webp', '#', 'Get Audit', '2025-07-23 14:43:55', '2025-07-23 14:43:55'),
(4, 1, 'test', 'test', 'test', 'test', 'test', '2025-07-25 14:33:03', '2025-07-25 14:33:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_app_contact`
--
ALTER TABLE `my_app_contact`
  ADD PRIMARY KEY (`contact_aid`);

--
-- Indexes for table `my_app_header`
--
ALTER TABLE `my_app_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- Indexes for table `my_app_test`
--
ALTER TABLE `my_app_test`
  ADD PRIMARY KEY (`test_aid`);

--
-- Indexes for table `my_app_testimonials`
--
ALTER TABLE `my_app_testimonials`
  ADD PRIMARY KEY (`testimonials_aid`);

--
-- Indexes for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  ADD PRIMARY KEY (`web_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `my_app_contact`
--
ALTER TABLE `my_app_contact`
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `my_app_header`
--
ALTER TABLE `my_app_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `my_app_test`
--
ALTER TABLE `my_app_test`
  MODIFY `test_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `my_app_testimonials`
--
ALTER TABLE `my_app_testimonials`
  MODIFY `testimonials_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `my_app_web_services`
--
ALTER TABLE `my_app_web_services`
  MODIFY `web_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

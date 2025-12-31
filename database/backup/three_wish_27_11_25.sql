-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 27, 2025 at 04:28 AM
-- Server version: 11.4.9-MariaDB
-- PHP Version: 8.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stagingd_three_wish`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('threewish-cache-anayazch@gmail.com|103.87.249.33', 'i:2;', 1759662939),
('threewish-cache-anayazch@gmail.com|103.87.249.33:timer', 'i:1759662939;', 1759662939),
('threewish-cache-ashamoni@hashimukhbd.com|37.111.200.195', 'i:1;', 1764148373),
('threewish-cache-ashamoni@hashimukhbd.com|37.111.200.195:timer', 'i:1764148373;', 1764148373),
('threewish-cache-ashrafabir@gmail.com|37.111.213.164', 'i:2;', 1760347291),
('threewish-cache-ashrafabir@gmail.com|37.111.213.164:timer', 'i:1760347291;', 1760347291),
('threewish-cache-brandonfarmer75@outlook.com|82.102.25.60', 'i:1;', 1759940078),
('threewish-cache-brandonfarmer75@outlook.com|82.102.25.60:timer', 'i:1759940078;', 1759940078),
('threewish-cache-jazzyr420@gmail.com|103.67.156.43', 'i:1;', 1762248159),
('threewish-cache-jazzyr420@gmail.com|103.67.156.43:timer', 'i:1762248159;', 1762248159),
('threewish-cache-lokman@gmail.com|127.0.0.1', 'i:1;', 1762830597),
('threewish-cache-lokman@gmail.com|127.0.0.1:timer', 'i:1762830597;', 1762830597),
('threewish-cache-maria@hasimukhbd.com|37.111.201.41', 'i:2;', 1762246602),
('threewish-cache-maria@hasimukhbd.com|37.111.201.41:timer', 'i:1762246602;', 1762246602),
('threewish-cache-matilde8@mteen.net|82.102.25.60', 'i:3;', 1759940064),
('threewish-cache-matilde8@mteen.net|82.102.25.60:timer', 'i:1759940064;', 1759940064),
('threewish-cache-mkarimbabu@gmail.com|103.209.108.188', 'i:1;', 1759727871),
('threewish-cache-mkarimbabu@gmail.com|103.209.108.188:timer', 'i:1759727871;', 1759727871),
('threewish-cache-naeim@hashimukhbd.com|103.133.173.19', 'i:1;', 1762322712),
('threewish-cache-naeim@hashimukhbd.com|103.133.173.19:timer', 'i:1762322712;', 1762322712),
('threewish-cache-naeim@hasimukhbd.com|103.133.173.19', 'i:1;', 1762322692),
('threewish-cache-naeim@hasimukhbd.com|103.133.173.19:timer', 'i:1762322692;', 1762322692),
('threewish-cache-razzaq.tecshield@gmail.com|72.255.51.23', 'i:1;', 1761651305),
('threewish-cache-razzaq.tecshield@gmail.com|72.255.51.23:timer', 'i:1761651305;', 1761651305),
('threewish-cache-rehanashrafkhan2010@gmail.con|103.150.49.62', 'i:1;', 1759475223),
('threewish-cache-rehanashrafkhan2010@gmail.con|103.150.49.62:timer', 'i:1759475223;', 1759475223),
('threewish-cache-rehanashrafkhan2025@gmail.con|103.150.49.62', 'i:2;', 1759475201),
('threewish-cache-rehanashrafkhan2025@gmail.con|103.150.49.62:timer', 'i:1759475201;', 1759475201),
('threewish-cache-shahriarkhan159@gamail.com|161.248.221.10', 'i:1;', 1759729635),
('threewish-cache-shahriarkhan159@gamail.com|161.248.221.10:timer', 'i:1759729635;', 1759729635),
('threewish-cache-shahriarkhan159@gmail.com|161.248.221.10', 'i:1;', 1759729671),
('threewish-cache-shahriarkhan159@gmail.com|161.248.221.10:timer', 'i:1759729671;', 1759729671),
('threewish-cache-shayan.sakeb007@gmail.com|103.60.175.45', 'i:1;', 1759597448),
('threewish-cache-shayan.sakeb007@gmail.com|103.60.175.45:timer', 'i:1759597448;', 1759597448),
('threewish-cache-shimazfatima14@gmail.com|103.101.199.49', 'i:1;', 1759673519),
('threewish-cache-shimazfatima14@gmail.com|103.101.199.49:timer', 'i:1759673519;', 1759673519),
('threewish-cache-sstokes81@yahoo.com|82.102.25.60', 'i:1;', 1759940082),
('threewish-cache-sstokes81@yahoo.com|82.102.25.60:timer', 'i:1759940082;', 1759940082),
('threewish-cache-sumaiya@hashimukhbd.com|37.111.200.116', 'i:1;', 1762772551),
('threewish-cache-sumaiya@hashimukhbd.com|37.111.200.116:timer', 'i:1762772551;', 1762772551),
('threewish-cache-super@admin.com|103.102.27.24', 'i:1;', 1760115086),
('threewish-cache-super@admin.com|103.102.27.24:timer', 'i:1760115086;', 1760115086),
('threewish-cache-talha@tecshield.io|101.53.234.135', 'i:2;', 1762174823),
('threewish-cache-talha@tecshield.io|101.53.234.135:timer', 'i:1762174823;', 1762174823),
('threewish-cache-tayhid@gmail.com|123.253.198.137', 'i:1;', 1759555748),
('threewish-cache-tayhid@gmail.com|123.253.198.137:timer', 'i:1759555748;', 1759555748);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `catalogs`
--

CREATE TABLE `catalogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `age_range` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `catalog_wish`
--

CREATE TABLE `catalog_wish` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `catalog_id` bigint(20) UNSIGNED NOT NULL,
  `wish_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `icon`, `description`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Books', 'books', NULL, 'Educational books, storybooks, textbooks, and reading materials for children of all ages.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(2, 'Toys', 'toys', NULL, 'Educational toys, board games, stuffed animals, and play items for children.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(3, 'Clothes', 'clothes', NULL, 'Children clothing items including shirts, pants, dresses, jackets, and seasonal wear.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(4, 'School Supplies', 'school-supplies', NULL, 'Backpacks, notebooks, pencils, pens, art supplies, and other educational materials.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(5, 'Sports Equipment', 'sports-equipment', NULL, 'Sports gear, balls, bicycles, skateboards, and outdoor play equipment for children.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(6, 'Baby Items', 'baby-items', NULL, 'Diapers, baby clothes, bottles, pacifiers, and other essentials for infants and toddlers.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(7, 'Shoes', 'shoes', NULL, 'Children shoes, sandals, sneakers, and footwear for various occasions and seasons.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(8, 'Art & Craft', 'art-craft', NULL, 'Coloring books, crayons, paints, craft kits, and creative supplies for children.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(9, 'Educational Kits', 'educational-kits', NULL, 'STEM kits, science experiments, learning games, and educational activity sets.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(10, 'Winter Gear', 'winter-gear', NULL, 'Winter coats, gloves, hats, scarves, and cold weather accessories for children.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(11, 'Musical Instruments', 'musical-instruments', NULL, 'Child-sized musical instruments like keyboards, guitars, drums, and recorders.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(12, 'Electronics', 'electronics', NULL, 'Educational tablets, calculators, children cameras, and age-appropriate electronic devices.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(13, 'Furniture', 'furniture', NULL, 'Children furniture like study desks, chairs, bookshelves, and storage units.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(14, 'Hygiene Products', 'hygiene-products', NULL, 'Child-friendly toiletries, toothbrushes, soap, shampoo, and personal care items.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(15, 'Party Supplies', 'party-supplies', NULL, 'Birthday decorations, party favors, celebration items, and festive materials.', 1, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(16, 'Cosmetics', 'cosmetics', NULL, NULL, 1, '2025-10-04 04:55:28', '2025-10-04 04:55:28', NULL),
(17, 'Transport', 'transport', NULL, NULL, 1, '2025-10-10 15:24:37', '2025-10-10 15:24:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `item_condition` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `auto_tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`auto_tags`)),
  `nsfw_flagged` tinyint(1) NOT NULL DEFAULT 0,
  `status` enum('available','reserved','donated') NOT NULL DEFAULT 'available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`id`, `title`, `description`, `item_condition`, `user_id`, `organization_id`, `category_id`, `auto_tags`, `nsfw_flagged`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pencil', 'HB pencil from matador', 'good', 7, NULL, 4, '\"art\"', 0, 'reserved', '2025-10-02 16:11:16', '2025-10-03 10:49:30', NULL),
(2, 'Magazine kishor alo', 'Children magazine February issue 2024', 'good', 10, NULL, 1, '\"magazine,news paper\"', 0, 'available', '2025-10-03 10:43:49', '2025-10-03 10:43:49', NULL),
(3, 'Fun water game', 'Water game', 'good', 10, NULL, 2, '\"game,toy\"', 0, 'available', '2025-10-03 10:46:57', '2025-10-03 10:46:57', NULL),
(4, 'Gun toy', 'Its a gun but not working but small kid can play with it', 'old', 10, NULL, 2, '\"toy,gun\"', 0, 'available', '2025-10-03 10:49:58', '2025-10-03 10:49:58', NULL),
(5, 'Baby Toothbrush', 'Soft Toothbrush Donation\r\nI would like to donate two soft toothbrushes purchased from Miniso. They are brand new and have never been used. With gentle bristles, these brushes are suitable for people of all ages and provide a comfortable brushing experience. I hope they can be of help to someone in need.', 'New', 13, NULL, 6, '\"brush,Pest,Baby,MiniSou,Barishal,Dhaka\"', 0, 'available', '2025-10-04 04:44:16', '2025-10-04 04:44:16', NULL),
(6, 'Shampoo', 'I would like to donate a brand new, unopened bottle of shampoo. It is in perfect condition and suitable for regular hair care. I hope it can be useful for someone who needs it.', 'good', 14, NULL, 16, '\"shampoo,Hair,Natural,Hair fall,Long hair\"', 0, 'available', '2025-10-04 04:55:28', '2025-10-04 06:10:28', NULL),
(7, 'Baby Car', 'New Baby Car', 'New', 14, NULL, 6, '\"car,Baby,cycle,toy,Bus,Jeep\"', 0, 'available', '2025-10-04 05:39:41', '2025-10-04 06:09:26', NULL),
(8, 'Bicycle', 'The color of my bicycle is pink and its suitable for 3/4 to 8/9 years old baby girl.', 'good', 15, NULL, 5, '\"Bicycle,Eskaton\"', 0, 'available', '2025-10-04 05:42:14', '2025-10-04 05:42:14', NULL),
(9, 'Mouse A4TECH', 'An office item', 'good', 16, NULL, 12, '\"electronics,wireless\"', 0, 'available', '2025-10-05 04:25:06', '2025-10-05 04:28:40', NULL),
(10, 'Toy', 'Please call', 'new', 17, NULL, 6, '\"baby\"', 0, 'available', '2025-10-05 05:15:12', '2025-10-05 05:15:12', '2025-10-06 11:02:20'),
(11, 'Toys', 'Car', 'good', 18, NULL, 2, '\"Toy\"', 0, 'available', '2025-10-05 05:17:24', '2025-10-05 05:17:24', '2025-10-06 11:01:46'),
(12, 'Book', 'Books', 'Old', 19, NULL, 1, '\"Children\"', 0, 'available', '2025-10-05 07:03:10', '2025-10-05 07:03:10', NULL),
(13, 'Full sleeve shirt', 'Full sleeve shirt in good condition for men.', 'good', 7, NULL, 3, '\"clothes,shirt\"', 0, 'available', '2025-10-12 15:17:21', '2025-10-12 15:17:21', NULL),
(14, 'Half sleeve shirt for men', 'Half sleeve beige shirt for men. Is in good condition.', 'new', 7, NULL, 3, '\"clothes,shirt\"', 0, 'available', '2025-10-12 15:18:55', '2025-10-12 15:18:55', NULL),
(15, 'Traditional panjabi', 'Traditional panjabi for men in red and green', 'new', 7, NULL, 3, '\"traditional,man,clothe\"', 0, 'available', '2025-10-12 15:21:01', '2025-10-12 15:21:01', NULL),
(16, 'Full sleeve shirt', 'Full sleeve shirt for men', 'good', 7, NULL, 3, '\"clothes,men,shirt\"', 0, 'available', '2025-10-12 15:44:24', '2025-10-12 15:44:24', NULL),
(17, 'Toy', 'Its a plastic toy', 'good', 10, NULL, 2, '\"toy,charecter\"', 0, 'available', '2025-10-27 12:34:10', '2025-10-27 12:34:10', NULL),
(18, 'Bag', 'School Bag', 'good', 151, NULL, 9, '\"School,Bag\"', 0, 'available', '2025-11-19 05:50:20', '2025-11-19 05:50:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE `donors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_phone` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` enum('male','female','other') NOT NULL DEFAULT 'male',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `donors`
--

INSERT INTO `donors` (`id`, `name`, `user_id`, `guardian_name`, `guardian_phone`, `relationship`, `dob`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Lokman Hosen', 6, NULL, NULL, NULL, '1994-10-04', 'male', '2025-10-02 06:44:57', '2025-10-02 06:44:57', NULL),
(2, 'Rehan Ashraf Khan', 7, NULL, NULL, NULL, '2000-04-07', 'male', '2025-10-02 16:04:57', '2025-10-02 16:04:57', NULL),
(4, 'Venus Fox', 9, 'Eaton Walsh', '01726589478', 'aunt', '2025-10-04', 'male', '2025-10-02 16:44:44', '2025-10-02 16:44:44', NULL),
(5, 'Ashraf khan', 10, NULL, NULL, NULL, '1982-11-08', 'male', '2025-10-02 16:50:29', '2025-10-02 16:50:29', NULL),
(6, 'Lokman donor', 11, NULL, NULL, NULL, '1994-10-04', 'male', '2025-10-02 16:50:46', '2025-10-02 16:50:46', NULL),
(7, 'Rakibul Islam', 12, 'Gjjjkkh', '01796558754', 'sibling', '2025-10-20', 'male', '2025-10-02 18:38:33', '2025-10-02 18:38:33', NULL),
(8, 'JOBAYDUL HASAN', 13, NULL, NULL, NULL, '2001-02-18', 'male', '2025-10-04 04:38:24', '2025-10-04 04:38:24', NULL),
(9, 'Jahanara Begum', 14, NULL, NULL, NULL, '1967-10-01', 'female', '2025-10-04 04:52:17', '2025-10-04 04:52:17', NULL),
(10, 'Fayzah Islam Shehjeen', 15, 'Tayhidul Islam', '01733211914', 'parent', '2015-01-20', 'female', '2025-10-04 05:34:11', '2025-10-04 05:34:11', NULL),
(11, 'Nahian', 16, NULL, NULL, NULL, '1996-02-26', 'male', '2025-10-05 04:21:56', '2025-10-05 09:55:02', NULL),
(12, 'Ataul Iqbal Rubel', 17, NULL, NULL, NULL, '1993-06-06', 'male', '2025-10-05 05:13:27', '2025-10-05 05:13:27', NULL),
(13, 'Syed Sabbir Kabir', 18, NULL, NULL, NULL, '1983-11-30', 'male', '2025-10-05 05:14:42', '2025-10-05 05:14:42', NULL),
(14, 'Rezaul', 19, NULL, NULL, NULL, '1988-02-11', 'male', '2025-10-05 06:19:33', '2025-10-05 06:19:33', NULL),
(15, 'Anaya Zoya Chowdhury', 20, 'Faria Sanzina Alam', '01911310833', 'parent', '2009-07-16', 'female', '2025-10-05 11:23:30', '2025-10-05 11:23:30', NULL),
(16, 'Faika Jebadiyah', 21, 'Farhana Afroze', '01550155103', 'parent', '2009-11-20', 'female', '2025-10-05 11:37:42', '2025-10-05 11:37:42', NULL),
(17, 'Shimaz Fatima', 22, NULL, NULL, NULL, '2005-09-06', 'female', '2025-10-05 14:13:26', '2025-10-05 14:13:26', NULL),
(18, 'Samiha', 31, NULL, NULL, NULL, '1998-07-28', 'female', '2025-10-15 04:51:11', '2025-10-15 04:51:11', NULL),
(19, 'Fayaz Shafqat Islam', 33, NULL, NULL, NULL, '2008-10-31', 'male', '2025-10-22 18:27:50', '2025-10-22 18:27:50', NULL),
(20, 'Motiur', 36, NULL, NULL, NULL, '1998-02-24', 'male', '2025-11-04 04:51:08', '2025-11-04 04:51:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fileable_type` varchar(255) NOT NULL,
  `fileable_id` bigint(20) UNSIGNED NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `file_type` varchar(255) NOT NULL,
  `mime_type` varchar(255) NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `fileable_type`, `fileable_id`, `file_path`, `file_type`, `mime_type`, `is_featured`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'App\\Models\\Donation', 2, 'donations/donation_2_1759488229_68dfa8e5215f1.jpg', 'image', 'image/jpeg', 1, '2025-10-03 10:43:49', '2025-10-03 10:43:49', NULL),
(3, 'App\\Models\\Donation', 3, 'donations/donation_3_1759488417_68dfa9a119179.jpg', 'image', 'image/jpeg', 1, '2025-10-03 10:46:57', '2025-10-03 10:46:57', NULL),
(4, 'App\\Models\\Donation', 4, 'donations/donation_4_1759488598_68dfaa56ba8e1.jpg', 'image', 'image/jpeg', 1, '2025-10-03 10:49:59', '2025-10-03 10:49:59', NULL),
(5, 'App\\Models\\Donation', 5, 'donations/donation_5_1759553056_68e0a620e43a5.jpeg', 'image', 'image/jpeg', 1, '2025-10-04 04:44:17', '2025-10-04 04:44:17', NULL),
(6, 'App\\Models\\Donation', 5, 'donations/donation_5_1759553057_68e0a6216b7d3.jpeg', 'image', 'image/jpeg', 0, '2025-10-04 04:44:17', '2025-10-04 04:44:17', NULL),
(7, 'App\\Models\\Donation', 6, 'donations/donation_6_1759553728_68e0a8c075f20.jpg', 'image', 'image/jpeg', 1, '2025-10-04 04:55:28', '2025-10-04 04:55:28', NULL),
(8, 'App\\Models\\Donation', 7, 'donations/donation_7_1759556381_68e0b31db19da.jpg', 'image', 'image/jpeg', 1, '2025-10-04 05:39:41', '2025-10-04 05:39:41', NULL),
(10, 'App\\Models\\Donation', 9, 'donations/donation_9_1759638306_68e1f322c0c37.jpg', 'image', 'image/jpeg', 1, '2025-10-05 04:25:07', '2025-10-05 04:25:07', NULL),
(11, 'App\\Models\\Donation', 9, 'donations/donation_9_1759638520_68e1f3f8dca41.jpg', 'image', 'image/jpeg', 0, '2025-10-05 04:28:41', '2025-10-05 04:28:41', NULL),
(12, 'App\\Models\\Donation', 10, 'donations/donation_10_1759641372_68e1ff1c89b97.jpg', 'image', 'image/jpeg', 1, '2025-10-05 05:16:12', '2025-10-05 05:16:12', NULL),
(13, 'App\\Models\\Donation', 10, 'donations/donation_10_1759641404_68e1ff3c03c50.jpg', 'image', 'image/jpeg', 0, '2025-10-05 05:16:44', '2025-10-05 05:16:44', NULL),
(14, 'App\\Models\\Donation', 11, 'donations/donation_11_1759641444_68e1ff644a950.jpeg', 'image', 'image/jpeg', 1, '2025-10-05 05:17:25', '2025-10-05 05:17:25', NULL),
(15, 'App\\Models\\Donation', 11, 'donations/donation_11_1759641494_68e1ff96afe5b.jpeg', 'image', 'image/jpeg', 0, '2025-10-05 05:18:15', '2025-10-05 05:18:15', NULL),
(16, 'App\\Models\\Donation', 12, 'donations/donation_12_1759648089_68e219596707f.jpg', 'image', 'image/jpeg', 1, '2025-10-05 07:08:09', '2025-10-05 07:08:09', NULL),
(17, 'App\\Models\\Donation', 8, 'donations/donation_8_1759726610_68e34c121ec6b.jpg', 'image', 'image/jpeg', 1, '2025-10-06 04:56:50', '2025-10-06 04:56:50', NULL),
(18, 'App\\Models\\Wish', 1, 'wishes/wish_1_1760109877_68e92535e12b9.jpg', 'image', 'image/jpeg', 1, '2025-10-10 15:24:38', '2025-10-10 16:52:11', '2025-10-10 16:52:11'),
(19, 'App\\Models\\Wish', 1, 'wishes/wish_1_1760109909_68e925552a329.jpg', 'image', 'image/jpeg', 0, '2025-10-10 15:25:09', '2025-10-10 16:52:14', '2025-10-10 16:52:14'),
(20, 'App\\Models\\Wish', 2, 'wishes/wish_2_1760111488_68e92b80cb081.jpg', 'image', 'image/jpeg', 0, '2025-10-10 15:51:29', '2025-10-10 15:51:29', NULL),
(21, 'App\\Models\\Wish', 1, 'wishes/wish_1_1760115117_68e939ade2b4a.jpg', 'image', 'image/jpeg', 1, '2025-10-10 16:51:57', '2025-10-10 16:51:57', NULL),
(22, 'App\\Models\\Wish', 1, 'wishes/wish_1_1760115117_68e939adf084c.jpg', 'image', 'image/jpeg', 0, '2025-10-10 16:51:58', '2025-10-10 16:51:58', NULL),
(23, 'App\\Models\\Wish', 2, 'wishes/wish_2_1760168179_68ea08f3dbd5f.jpg', 'image', 'image/jpeg', 1, '2025-10-11 07:36:19', '2025-10-11 07:36:19', NULL),
(24, 'App\\Models\\Wish', 3, 'wishes/wish_3_1760168733_68ea0b1d5b00e.png', 'image', 'image/jpeg', 1, '2025-10-11 07:45:33', '2025-10-11 07:45:33', NULL),
(25, 'App\\Models\\Wish', 3, 'wishes/wish_3_1760168733_68ea0b1d6a7f5.jpg', 'image', 'image/jpeg', 0, '2025-10-11 07:45:33', '2025-10-11 07:45:33', NULL),
(26, 'App\\Models\\Wish', 4, 'wishes/wish_4_1760244512_68eb3320f1433.jpg', 'image', 'image/jpeg', 1, '2025-10-12 04:48:32', '2025-10-12 04:48:32', NULL),
(27, 'App\\Models\\Wish', 5, 'wishes/wish_5_1760267784_68eb8e087360c.jpg', 'image', 'image/jpeg', 0, '2025-10-12 11:16:25', '2025-10-16 05:11:25', '2025-10-16 05:11:25'),
(28, 'App\\Models\\Wish', 5, 'wishes/wish_5_1760267785_68eb8e0914afa.jpg', 'image', 'image/jpeg', 0, '2025-10-12 11:16:25', '2025-10-16 05:11:22', '2025-10-16 05:11:22'),
(29, 'App\\Models\\Wish', 5, 'wishes/wish_5_1760267785_68eb8e09aa0ef.jpg', 'image', 'image/jpeg', 0, '2025-10-12 11:16:26', '2025-10-16 05:21:33', NULL),
(30, 'App\\Models\\Wish', 6, 'wishes/wish_6_1760268031_68eb8effb2af0.jpg', 'image', 'image/jpeg', 1, '2025-10-12 11:20:31', '2025-10-12 11:20:31', NULL),
(31, 'App\\Models\\Donation', 13, 'donations/donation_13_1760282241_68ebc6817909f.jpeg', 'image', 'image/jpeg', 1, '2025-10-12 15:17:22', '2025-10-12 15:17:22', NULL),
(32, 'App\\Models\\Donation', 14, 'donations/donation_14_1760282335_68ebc6df941a2.jpeg', 'image', 'image/jpeg', 1, '2025-10-12 15:18:56', '2025-10-12 15:18:56', NULL),
(33, 'App\\Models\\Donation', 15, 'donations/donation_15_1760282461_68ebc75dd58cb.jpeg', 'image', 'image/jpeg', 1, '2025-10-12 15:21:02', '2025-10-12 15:21:02', NULL),
(34, 'App\\Models\\Donation', 16, 'donations/donation_16_1760283864_68ebccd845a05.jpeg', 'image', 'image/jpeg', 1, '2025-10-12 15:44:24', '2025-10-12 15:44:24', NULL),
(35, 'App\\Models\\Wish', 7, 'wishes/wish_7_1760343363_68ecb543446c3.jpg', 'image', 'image/jpeg', 1, '2025-10-13 08:16:03', '2025-10-13 08:16:03', NULL),
(36, 'App\\Models\\Wish', 8, 'wishes/wish_8_1760343548_68ecb5fc27413.jpg', 'image', 'image/jpeg', 1, '2025-10-13 08:19:08', '2025-10-13 08:19:08', NULL),
(37, 'App\\Models\\Wish', 9, 'wishes/wish_9_1760344111_68ecb82fdf641.jpg', 'image', 'image/jpeg', 0, '2025-10-13 08:28:31', '2025-10-16 05:07:04', NULL),
(38, 'App\\Models\\Wish', 10, 'wishes/wish_10_1760344489_68ecb9a9e9ddc.jpg', 'image', 'image/jpeg', 1, '2025-10-13 08:34:49', '2025-10-13 08:34:49', NULL),
(39, 'App\\Models\\Wish', 11, 'wishes/wish_11_1760344603_68ecba1bb221e.jpg', 'image', 'image/jpeg', 0, '2025-10-13 08:36:44', '2025-10-16 05:07:46', NULL),
(40, 'App\\Models\\Wish', 11, 'wishes/wish_11_1760344623_68ecba2f000ae.jpg', 'image', 'image/jpeg', 0, '2025-10-13 08:37:03', '2025-10-16 05:07:46', NULL),
(41, 'App\\Models\\Wish', 11, 'wishes/wish_11_1760518966_68ef633603f0b.jpeg', 'image', 'image/jpeg', 1, '2025-10-15 09:02:46', '2025-10-16 05:07:46', NULL),
(42, 'App\\Models\\Wish', 9, 'wishes/wish_9_1760589620_68f07734d2de2.jpg', 'image', 'image/jpeg', 1, '2025-10-16 04:40:20', '2025-10-16 05:07:04', NULL),
(43, 'App\\Models\\Wish', 5, 'wishes/wish_5_1760591579_68f07edb40a71.jpg', 'image', 'image/jpeg', 1, '2025-10-16 05:12:59', '2025-10-16 05:21:33', NULL),
(44, 'App\\Models\\Wish', 12, 'wishes/wish_12_1760601618_68f0a61283771.jpg', 'image', 'image/jpeg', 1, '2025-10-16 08:00:18', '2025-10-16 08:00:18', NULL),
(45, 'App\\Models\\Wish', 12, 'wishes/wish_12_1760601741_68f0a68d9f1c0.jpg', 'image', 'image/jpeg', 0, '2025-10-16 08:02:21', '2025-10-16 08:02:21', NULL),
(46, 'App\\Models\\Wish', 13, 'wishes/wish_13_1761568343_68ff665742f0b.jpg', 'image', 'image/jpeg', 1, '2025-10-27 12:32:23', '2025-10-27 12:32:23', NULL),
(47, 'App\\Models\\Donation', 17, 'donations/donation_17_1761568450_68ff66c232362.jpg', 'image', 'image/jpeg', 1, '2025-10-27 12:34:10', '2025-10-27 12:34:10', NULL),
(48, 'App\\Models\\Wish', 14, 'wishes/wish_14_1761568596_68ff6754ecaa4.jpg', 'image', 'image/jpeg', 1, '2025-10-27 12:36:36', '2025-10-27 12:36:36', NULL),
(49, 'App\\Models\\Wish', 14, 'wishes/wish_14_1761568596_68ff6754edd68.jpg', 'image', 'image/jpeg', 0, '2025-10-27 12:36:37', '2025-10-27 12:36:37', NULL),
(50, 'App\\Models\\Wish', 15, 'wishes/wish_15_1761655051_6900b90b411f7.jpeg', 'image', 'image/jpeg', 1, '2025-10-28 12:37:31', '2025-10-28 12:38:19', NULL),
(51, 'App\\Models\\Wish', 16, 'wishes/wish_16_1762242302_6909aefecd1b4.jpg', 'image', 'image/jpeg', 1, '2025-11-04 07:45:02', '2025-11-04 07:45:02', NULL),
(52, 'App\\Models\\Wish', 17, 'wishes/wish_17_1762245193_6909ba492b9f7.jpg', 'image', 'image/jpeg', 1, '2025-11-04 08:33:13', '2025-11-04 08:33:13', NULL),
(53, 'App\\Models\\Wish', 18, 'wishes/wish_18_1762247118_6909c1ce2a595.jpg', 'image', 'image/jpeg', 1, '2025-11-04 09:05:18', '2025-11-04 09:05:18', NULL),
(54, 'App\\Models\\Wish', 19, 'wishes/wish_19_1762247498_6909c34a9d7c1.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:11:38', '2025-11-04 09:11:38', NULL),
(55, 'App\\Models\\Wish', 20, 'wishes/wish_20_1762247789_6909c46d1512b.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:16:29', '2025-11-04 09:16:29', NULL),
(56, 'App\\Models\\Wish', 21, 'wishes/wish_21_1762248180_6909c5f49bf1f.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:23:00', '2025-11-04 09:23:00', NULL),
(57, 'App\\Models\\Wish', 22, 'wishes/wish_22_1762248476_6909c71c722a7.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:27:56', '2025-11-04 09:27:56', NULL),
(58, 'App\\Models\\Wish', 23, 'wishes/wish_23_1762248832_6909c8802642e.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:33:52', '2025-11-04 09:33:52', NULL),
(59, 'App\\Models\\Wish', 24, 'wishes/wish_24_1762249254_6909ca26b7cf0.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:40:54', '2025-11-04 09:40:54', NULL),
(60, 'App\\Models\\Wish', 25, 'wishes/wish_25_1762249567_6909cb5f54204.jpg', 'image', 'image/jpeg', 1, '2025-11-04 09:46:07', '2025-11-04 09:46:07', NULL),
(61, 'App\\Models\\Wish', 26, 'wishes/wish_26_1762249834_6909cc6a83012.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 09:50:34', '2025-11-04 09:50:34', NULL),
(62, 'App\\Models\\Wish', 27, 'wishes/wish_27_1762250131_6909cd93d7fe8.jpg', 'image', 'image/jpeg', 1, '2025-11-04 09:55:32', '2025-11-04 09:55:32', NULL),
(63, 'App\\Models\\Wish', 28, 'wishes/wish_28_1762250388_6909ce943e6b7.jpg', 'image', 'image/jpeg', 1, '2025-11-04 09:59:48', '2025-11-04 09:59:48', NULL),
(64, 'App\\Models\\Wish', 29, 'wishes/wish_29_1762250623_6909cf7fdc428.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:03:43', '2025-11-04 10:03:43', NULL),
(65, 'App\\Models\\Wish', 30, 'wishes/wish_30_1762250923_6909d0abeadc4.jpg', 'image', 'image/jpeg', 1, '2025-11-04 10:08:44', '2025-11-04 10:08:44', NULL),
(66, 'App\\Models\\Wish', 31, 'wishes/wish_31_1762251168_6909d1a0986e0.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:12:48', '2025-11-04 10:12:48', NULL),
(67, 'App\\Models\\Wish', 32, 'wishes/wish_32_1762251432_6909d2a8230e7.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:17:12', '2025-11-04 10:17:12', NULL),
(68, 'App\\Models\\Wish', 33, 'wishes/wish_33_1762251775_6909d3ffe9d78.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:22:55', '2025-11-04 10:22:55', NULL),
(69, 'App\\Models\\Wish', 34, 'wishes/wish_34_1762251994_6909d4da99a03.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:26:34', '2025-11-04 10:26:34', NULL),
(70, 'App\\Models\\Wish', 35, 'wishes/wish_35_1762252226_6909d5c2767be.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:30:26', '2025-11-04 10:30:26', NULL),
(71, 'App\\Models\\Wish', 36, 'wishes/wish_36_1762252446_6909d69eca373.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:34:06', '2025-11-04 10:34:06', NULL),
(72, 'App\\Models\\Wish', 37, 'wishes/wish_37_1762252674_6909d782cbc77.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:37:54', '2025-11-04 10:37:54', NULL),
(73, 'App\\Models\\Wish', 38, 'wishes/wish_38_1762252925_6909d87d7fc42.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:42:05', '2025-11-04 10:42:05', NULL),
(74, 'App\\Models\\Wish', 39, 'wishes/wish_39_1762253880_6909dc38cd776.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 10:58:00', '2025-11-04 10:58:00', NULL),
(75, 'App\\Models\\Wish', 40, 'wishes/wish_40_1762254152_6909dd48b4c11.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 11:02:32', '2025-11-04 11:02:32', NULL),
(76, 'App\\Models\\Wish', 41, 'wishes/wish_41_1762254448_6909de70092e4.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 11:07:28', '2025-11-04 11:07:28', NULL),
(77, 'App\\Models\\Wish', 42, 'wishes/wish_42_1762254671_6909df4fc8a54.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 11:11:11', '2025-11-04 11:11:11', NULL),
(78, 'App\\Models\\Wish', 43, 'wishes/wish_43_1762255108_6909e10420cd8.jpeg', 'image', 'image/jpeg', 1, '2025-11-04 11:18:28', '2025-11-04 11:18:28', NULL),
(79, 'App\\Models\\Wish', 44, 'wishes/wish_44_1762329580_690b03ec737b4.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 07:59:40', '2025-11-05 07:59:40', NULL),
(80, 'App\\Models\\Wish', 45, 'wishes/wish_45_1762329832_690b04e89518e.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:03:52', '2025-11-05 08:03:52', NULL),
(81, 'App\\Models\\Wish', 46, 'wishes/wish_46_1762330157_690b062d988df.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:09:17', '2025-11-05 08:09:17', NULL),
(82, 'App\\Models\\Wish', 47, 'wishes/wish_47_1762330401_690b072179b40.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:13:21', '2025-11-05 08:13:21', NULL),
(83, 'App\\Models\\Wish', 48, 'wishes/wish_48_1762330902_690b091651469.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:21:42', '2025-11-05 08:21:42', NULL),
(84, 'App\\Models\\Wish', 49, 'wishes/wish_49_1762331170_690b0a225991c.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:26:10', '2025-11-05 08:26:10', NULL),
(85, 'App\\Models\\Wish', 50, 'wishes/wish_50_1762331387_690b0afbbb003.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:29:47', '2025-11-05 08:29:47', NULL),
(86, 'App\\Models\\Wish', 51, 'wishes/wish_51_1762331657_690b0c09af493.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:34:17', '2025-11-05 08:34:17', NULL),
(87, 'App\\Models\\Wish', 52, 'wishes/wish_52_1762331892_690b0cf4aa654.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:38:12', '2025-11-05 08:38:12', NULL),
(88, 'App\\Models\\Wish', 53, 'wishes/wish_53_1762332249_690b0e595c57e.jpeg', 'image', 'image/jpeg', 1, '2025-11-05 08:44:09', '2025-11-05 08:44:09', NULL),
(89, 'App\\Models\\Wish', 54, 'wishes/wish_54_1762770261_6911bd55ac7c6.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:24:21', '2025-11-10 10:24:21', NULL),
(90, 'App\\Models\\Wish', 55, 'wishes/wish_55_1762770580_6911be946c65e.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:29:40', '2025-11-10 10:29:40', NULL),
(91, 'App\\Models\\Wish', 56, 'wishes/wish_56_1762770753_6911bf41bda32.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:32:33', '2025-11-10 10:32:33', NULL),
(92, 'App\\Models\\Wish', 57, 'wishes/wish_57_1762770977_6911c02152382.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:36:17', '2025-11-10 10:36:17', NULL),
(93, 'App\\Models\\Wish', 58, 'wishes/wish_58_1762771218_6911c11237be9.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:40:18', '2025-11-10 10:40:18', NULL),
(94, 'App\\Models\\Wish', 59, 'wishes/wish_59_1762771444_6911c1f4b978f.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:44:04', '2025-11-10 10:44:04', NULL),
(95, 'App\\Models\\Wish', 60, 'wishes/wish_60_1762771651_6911c2c3a8148.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:47:31', '2025-11-10 10:47:31', NULL),
(96, 'App\\Models\\Wish', 61, 'wishes/wish_61_1762772098_6911c482503d6.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 10:54:58', '2025-11-10 10:54:58', NULL),
(97, 'App\\Models\\Wish', 62, 'wishes/wish_62_1762772464_6911c5f07d1b9.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 11:01:04', '2025-11-10 11:01:04', NULL),
(98, 'App\\Models\\Wish', 63, 'wishes/wish_63_1762772701_6911c6dd97b40.jpg', 'image', 'image/jpeg', 1, '2025-11-10 11:05:01', '2025-11-10 11:05:01', NULL),
(99, 'App\\Models\\Wish', 64, 'wishes/wish_64_1762772862_6911c77e4779d.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 11:07:42', '2025-11-10 11:07:42', NULL),
(100, 'App\\Models\\Wish', 65, 'wishes/wish_65_1762773200_6911c8d06d2d9.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 11:13:20', '2025-11-10 11:13:20', NULL),
(101, 'App\\Models\\Wish', 66, 'wishes/wish_66_1762773473_6911c9e1365e3.jpeg', 'image', 'image/jpeg', 1, '2025-11-10 11:17:53', '2025-11-10 11:17:53', NULL),
(102, 'App\\Models\\Wish', 67, 'wishes/wish_67_1762845529_6912e359e4e39.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:18:49', '2025-11-11 07:18:49', NULL),
(103, 'App\\Models\\Wish', 68, 'wishes/wish_68_1762845738_6912e42a9ee9c.jpg', 'image', 'image/jpeg', 1, '2025-11-11 07:22:18', '2025-11-11 07:22:18', NULL),
(104, 'App\\Models\\Wish', 69, 'wishes/wish_69_1762846178_6912e5e2afaa7.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:29:38', '2025-11-11 07:29:38', NULL),
(105, 'App\\Models\\Wish', 70, 'wishes/wish_70_1762846649_6912e7b9f0c8d.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:37:30', '2025-11-11 07:37:30', NULL),
(106, 'App\\Models\\Wish', 71, 'wishes/wish_71_1762846877_6912e89d42cab.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:41:17', '2025-11-11 07:41:17', NULL),
(107, 'App\\Models\\Wish', 72, 'wishes/wish_72_1762847082_6912e96a3f01c.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:44:42', '2025-11-11 07:44:42', NULL),
(108, 'App\\Models\\Wish', 73, 'wishes/wish_73_1762847941_6912ecc54555b.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 07:59:01', '2025-11-11 07:59:01', NULL),
(109, 'App\\Models\\Wish', 74, 'wishes/wish_74_1762848465_6912eed13988c.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:07:45', '2025-11-11 08:07:45', NULL),
(110, 'App\\Models\\Wish', 75, 'wishes/wish_75_1762848717_6912efcd759fb.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:11:57', '2025-11-11 08:11:57', NULL),
(111, 'App\\Models\\Wish', 76, 'wishes/wish_76_1762848952_6912f0b805e45.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:15:52', '2025-11-11 08:15:52', NULL),
(112, 'App\\Models\\Wish', 77, 'wishes/wish_77_1762849524_6912f2f427feb.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:25:24', '2025-11-11 08:25:24', NULL),
(113, 'App\\Models\\Wish', 78, 'wishes/wish_78_1762849838_6912f42e17baa.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:30:38', '2025-11-11 08:30:38', NULL),
(114, 'App\\Models\\Wish', 79, 'wishes/wish_79_1762850041_6912f4f9a8cb2.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:34:01', '2025-11-11 08:34:01', NULL),
(115, 'App\\Models\\Wish', 80, 'wishes/wish_80_1762850367_6912f63f4f4d5.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:39:27', '2025-11-11 08:39:27', NULL),
(116, 'App\\Models\\Wish', 81, 'wishes/wish_81_1762850559_6912f6ff8032a.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 08:42:39', '2025-11-11 08:42:39', NULL),
(117, 'App\\Models\\Wish', 82, 'wishes/wish_82_1762850899_6912f85343b5f.jpg', 'image', 'image/jpeg', 1, '2025-11-11 08:48:19', '2025-11-11 08:48:19', NULL),
(118, 'App\\Models\\Wish', 83, 'wishes/wish_83_1762851326_6912f9fe74186.jpg', 'image', 'image/jpeg', 1, '2025-11-11 08:55:26', '2025-11-11 08:55:26', NULL),
(119, 'App\\Models\\Wish', 84, 'wishes/wish_84_1762851585_6912fb015b5bb.jpg', 'image', 'image/jpeg', 1, '2025-11-11 08:59:45', '2025-11-11 08:59:45', NULL),
(120, 'App\\Models\\Wish', 85, 'wishes/wish_85_1762852006_6912fca67fa0d.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 09:06:46', '2025-11-11 09:06:46', NULL),
(121, 'App\\Models\\Wish', 86, 'wishes/wish_86_1762852542_6912febe0b5cf.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 09:15:42', '2025-11-11 09:15:42', NULL),
(122, 'App\\Models\\Wish', 87, 'wishes/wish_87_1762852680_6912ff489bfe6.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 09:18:00', '2025-11-11 09:18:00', NULL),
(123, 'App\\Models\\Wish', 88, 'wishes/wish_88_1762852834_6912ffe28b725.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 09:20:34', '2025-11-11 09:20:34', NULL),
(124, 'App\\Models\\Wish', 89, 'wishes/wish_89_1762853235_6913017382c1f.jpg', 'image', 'image/jpeg', 1, '2025-11-11 09:27:15', '2025-11-11 09:27:15', NULL),
(125, 'App\\Models\\Wish', 90, 'wishes/wish_90_1762853497_69130279cb096.jpg', 'image', 'image/jpeg', 1, '2025-11-11 09:31:37', '2025-11-11 09:31:37', NULL),
(126, 'App\\Models\\Wish', 91, 'wishes/wish_91_1762853755_6913037b751f7.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 09:35:55', '2025-11-11 09:35:55', NULL),
(127, 'App\\Models\\Wish', 92, 'wishes/wish_92_1762856886_69130fb63c72d.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:28:06', '2025-11-11 10:28:06', NULL),
(128, 'App\\Models\\Wish', 93, 'wishes/wish_93_1762857044_691310544771d.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:30:44', '2025-11-11 10:30:44', NULL),
(129, 'App\\Models\\Wish', 94, 'wishes/wish_94_1762857442_691311e24ec68.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:37:22', '2025-11-11 10:37:22', NULL),
(130, 'App\\Models\\Wish', 95, 'wishes/wish_95_1762857634_691312a293dd4.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:40:34', '2025-11-11 10:40:34', NULL),
(131, 'App\\Models\\Wish', 96, 'wishes/wish_96_1762857815_69131357f32e9.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:43:36', '2025-11-11 10:43:36', NULL),
(132, 'App\\Models\\Wish', 97, 'wishes/wish_97_1762858095_6913146fa4f2c.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:48:15', '2025-11-11 10:48:15', NULL),
(133, 'App\\Models\\Wish', 98, 'wishes/wish_98_1762858416_691315b072a40.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:53:36', '2025-11-11 10:53:36', NULL),
(134, 'App\\Models\\Wish', 99, 'wishes/wish_99_1762858630_691316866aeb7.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 10:57:10', '2025-11-11 10:57:10', NULL),
(135, 'App\\Models\\Wish', 100, 'wishes/wish_100_1762858881_691317813ccd2.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:01:21', '2025-11-11 11:01:21', NULL),
(136, 'App\\Models\\Wish', 101, 'wishes/wish_101_1762859045_6913182541c8a.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:04:05', '2025-11-11 11:04:05', NULL),
(137, 'App\\Models\\Wish', 102, 'wishes/wish_102_1762859556_69131a245bd76.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:12:36', '2025-11-11 11:12:36', NULL),
(138, 'App\\Models\\Wish', 103, 'wishes/wish_103_1762859774_69131afe7f725.jpg', 'image', 'image/jpeg', 1, '2025-11-11 11:16:14', '2025-11-11 11:16:14', NULL),
(139, 'App\\Models\\Wish', 104, 'wishes/wish_104_1762859945_69131ba9e0777.jpg', 'image', 'image/jpeg', 1, '2025-11-11 11:19:05', '2025-11-11 11:19:05', NULL),
(140, 'App\\Models\\Wish', 105, 'wishes/wish_105_1762860091_69131c3b49cb3.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:21:31', '2025-11-11 11:21:31', NULL),
(141, 'App\\Models\\Wish', 106, 'wishes/wish_106_1762860257_69131ce10c00b.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:24:17', '2025-11-11 11:24:17', NULL),
(142, 'App\\Models\\Wish', 107, 'wishes/wish_107_1762860753_69131ed17866f.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:32:33', '2025-11-11 11:32:33', NULL),
(143, 'App\\Models\\Wish', 108, 'wishes/wish_108_1762860930_69131f8291a64.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:35:30', '2025-11-11 11:35:30', NULL),
(144, 'App\\Models\\Wish', 109, 'wishes/wish_109_1762861255_691320c75d0e5.jpeg', 'image', 'image/jpeg', 1, '2025-11-11 11:40:55', '2025-11-11 11:40:55', NULL),
(145, 'App\\Models\\Wish', 110, 'wishes/wish_110_1762933020_6914391cde845.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 07:37:00', '2025-11-12 07:37:00', NULL),
(146, 'App\\Models\\Wish', 111, 'wishes/wish_111_1762934174_69143d9ea137d.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 07:56:14', '2025-11-12 07:56:14', NULL),
(147, 'App\\Models\\Wish', 112, 'wishes/wish_112_1762934516_69143ef49aea0.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 08:01:56', '2025-11-12 08:01:56', NULL),
(148, 'App\\Models\\Wish', 113, 'wishes/wish_113_1762934747_69143fdb8db64.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 08:05:47', '2025-11-12 08:05:47', NULL),
(149, 'App\\Models\\Wish', 114, 'wishes/wish_114_1762935117_6914414d3944a.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 08:11:57', '2025-11-12 08:11:57', NULL),
(150, 'App\\Models\\Wish', 115, 'wishes/wish_115_1762935557_691443052a608.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 08:19:17', '2025-11-12 08:19:17', NULL),
(151, 'App\\Models\\Wish', 116, 'wishes/wish_116_1762935796_691443f4627ae.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 08:23:16', '2025-11-12 08:23:16', NULL),
(152, 'App\\Models\\Wish', 117, 'wishes/wish_117_1762940873_691457c95904c.jpeg', 'image', 'image/jpeg', 1, '2025-11-12 09:47:53', '2025-11-12 09:47:53', NULL),
(153, 'App\\Models\\Wish', 118, 'wishes/wish_118_1763279276_691981ac91b1f.jpeg', 'image', 'image/jpeg', 1, '2025-11-16 07:47:56', '2025-11-16 07:47:56', NULL),
(154, 'App\\Models\\Wish', 119, 'wishes/wish_119_1763279519_6919829f716cf.jpg', 'image', 'image/jpeg', 1, '2025-11-16 07:51:59', '2025-11-16 07:51:59', NULL),
(155, 'App\\Models\\Wish', 120, 'wishes/wish_120_1763282381_69198dcde2b27.jpeg', 'image', 'image/jpeg', 1, '2025-11-16 08:39:41', '2025-11-16 08:39:41', NULL),
(156, 'App\\Models\\Wish', 121, 'wishes/wish_121_1763463617_691c51c17c41a.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:00:17', '2025-11-18 11:00:17', NULL),
(157, 'App\\Models\\Wish', 122, 'wishes/wish_122_1763463761_691c52512536f.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:02:41', '2025-11-18 11:02:41', NULL),
(158, 'App\\Models\\Wish', 123, 'wishes/wish_123_1763463923_691c52f3927fb.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:05:23', '2025-11-18 11:05:23', NULL),
(159, 'App\\Models\\Wish', 124, 'wishes/wish_124_1763464142_691c53ce1b454.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:09:02', '2025-11-18 11:09:02', NULL),
(160, 'App\\Models\\Wish', 125, 'wishes/wish_125_1763464329_691c5489c86fb.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:12:09', '2025-11-18 11:12:09', NULL),
(161, 'App\\Models\\Wish', 126, 'wishes/wish_126_1763464528_691c55507f827.jpeg', 'image', 'image/jpeg', 1, '2025-11-18 11:15:28', '2025-11-18 11:15:28', NULL),
(162, 'App\\Models\\Wish', 127, 'wishes/wish_127_1763464833_691c5681f15c6.jpg', 'image', 'image/jpeg', 1, '2025-11-18 11:20:34', '2025-11-18 11:20:34', NULL),
(163, 'App\\Models\\Wish', 128, 'wishes/wish_128_1763465852_691c5a7c7b5cb.jpg', 'image', 'image/jpeg', 1, '2025-11-18 11:37:32', '2025-11-18 11:37:32', NULL),
(164, 'App\\Models\\Donation', 18, 'donations/donation_18_1763531420_691d5a9c2bfea.jpg', 'image', 'image/jpeg', 1, '2025-11-19 05:50:20', '2025-11-19 05:50:20', NULL),
(165, 'App\\Models\\Wish', 129, 'wishes/wish_129_1763896486_6922eca65640a.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:14:46', '2025-11-23 11:14:46', NULL),
(166, 'App\\Models\\Wish', 130, 'wishes/wish_130_1763896714_6922ed8a45c17.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:18:34', '2025-11-23 11:18:34', NULL),
(167, 'App\\Models\\Wish', 131, 'wishes/wish_131_1763897024_6922eec03a7f8.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:23:44', '2025-11-23 11:23:44', NULL),
(168, 'App\\Models\\Wish', 132, 'wishes/wish_132_1763897223_6922ef879d0b0.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:27:03', '2025-11-23 11:27:03', NULL),
(169, 'App\\Models\\Wish', 133, 'wishes/wish_133_1763897381_6922f0252da0b.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:29:41', '2025-11-23 11:29:41', NULL),
(170, 'App\\Models\\Wish', 134, 'wishes/wish_134_1763897545_6922f0c98110d.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:32:25', '2025-11-23 11:32:25', NULL),
(171, 'App\\Models\\Wish', 135, 'wishes/wish_135_1763897694_6922f15e7faa3.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:34:54', '2025-11-23 11:34:54', NULL),
(172, 'App\\Models\\Wish', 136, 'wishes/wish_136_1763897881_6922f21937fa7.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:38:01', '2025-11-23 11:38:01', NULL),
(173, 'App\\Models\\Wish', 137, 'wishes/wish_137_1763898087_6922f2e76aec3.jpeg', 'image', 'image/jpeg', 1, '2025-11-23 11:41:27', '2025-11-23 11:41:27', NULL),
(174, 'App\\Models\\Wish', 138, 'wishes/wish_138_1764136326_69269586650c7.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 05:52:06', '2025-11-26 05:52:06', NULL),
(175, 'App\\Models\\Wish', 139, 'wishes/wish_139_1764140828_6926a71c55248.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:07:08', '2025-11-26 07:07:08', NULL),
(176, 'App\\Models\\Wish', 140, 'wishes/wish_140_1764142217_6926ac89aa5cb.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:30:17', '2025-11-26 07:30:17', NULL),
(177, 'App\\Models\\Wish', 141, 'wishes/wish_141_1764142340_6926ad0480488.jpg', 'image', 'image/jpeg', 1, '2025-11-26 07:32:20', '2025-11-26 07:32:20', NULL),
(178, 'App\\Models\\Wish', 142, 'wishes/wish_142_1764142538_6926adcad44a8.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:35:38', '2025-11-26 07:35:38', NULL),
(179, 'App\\Models\\Wish', 143, 'wishes/wish_143_1764142582_6926adf6df7f4.jpg', 'image', 'image/jpeg', 1, '2025-11-26 07:36:23', '2025-11-26 07:36:23', NULL),
(180, 'App\\Models\\Wish', 144, 'wishes/wish_144_1764142722_6926ae822d77a.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:38:42', '2025-11-26 07:38:42', NULL),
(181, 'App\\Models\\Wish', 145, 'wishes/wish_145_1764142790_6926aec63bff3.jpg', 'image', 'image/jpeg', 1, '2025-11-26 07:39:50', '2025-11-26 07:39:50', NULL),
(182, 'App\\Models\\Wish', 146, 'wishes/wish_146_1764142996_6926af94ad5f9.jpg', 'image', 'image/jpeg', 1, '2025-11-26 07:43:16', '2025-11-26 07:43:16', NULL),
(183, 'App\\Models\\Wish', 147, 'wishes/wish_147_1764143193_6926b0597c3f3.png', 'image', 'image/png', 1, '2025-11-26 07:46:33', '2025-11-26 07:46:33', NULL),
(184, 'App\\Models\\Wish', 148, 'wishes/wish_148_1764143450_6926b15a925ff.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:50:50', '2025-11-26 07:50:50', NULL),
(185, 'App\\Models\\Wish', 149, 'wishes/wish_149_1764143896_6926b31854007.jpg', 'image', 'image/jpeg', 1, '2025-11-26 07:58:16', '2025-11-26 07:58:16', NULL),
(186, 'App\\Models\\Wish', 150, 'wishes/wish_150_1764143900_6926b31cb66c6.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 07:58:20', '2025-11-26 07:58:20', NULL),
(187, 'App\\Models\\Wish', 151, 'wishes/wish_151_1764144139_6926b40b79daf.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 08:02:19', '2025-11-26 08:02:19', NULL),
(188, 'App\\Models\\Wish', 152, 'wishes/wish_152_1764144279_6926b497eaed9.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 08:04:39', '2025-11-26 08:04:39', NULL),
(189, 'App\\Models\\Wish', 153, 'wishes/wish_153_1764144555_6926b5abae36a.jpg', 'image', 'image/jpeg', 1, '2025-11-26 08:09:15', '2025-11-26 08:09:15', NULL),
(190, 'App\\Models\\Wish', 154, 'wishes/wish_154_1764145933_6926bb0d8b50f.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 08:32:13', '2025-11-26 08:32:13', NULL),
(191, 'App\\Models\\Wish', 155, 'wishes/wish_155_1764146476_6926bd2c32985.jpg', 'image', 'image/jpeg', 1, '2025-11-26 08:41:16', '2025-11-26 08:41:16', NULL),
(192, 'App\\Models\\Wish', 156, 'wishes/wish_156_1764146520_6926bd58941d4.jpg', 'image', 'image/jpeg', 1, '2025-11-26 08:42:00', '2025-11-26 08:42:00', NULL),
(193, 'App\\Models\\Wish', 157, 'wishes/wish_157_1764146696_6926be083fd50.jpg', 'image', 'image/jpeg', 1, '2025-11-26 08:44:56', '2025-11-26 08:44:56', NULL),
(194, 'App\\Models\\Wish', 158, 'wishes/wish_158_1764146707_6926be1362abd.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 08:45:07', '2025-11-26 08:45:07', NULL),
(195, 'App\\Models\\Wish', 159, 'wishes/wish_159_1764147097_6926bf9994e8e.jpg', 'image', 'image/jpeg', 1, '2025-11-26 08:51:37', '2025-11-26 08:51:37', NULL),
(196, 'App\\Models\\Wish', 160, 'wishes/wish_160_1764147897_6926c2b9642a2.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 09:04:57', '2025-11-26 09:04:57', NULL),
(197, 'App\\Models\\Wish', 161, 'wishes/wish_161_1764148101_6926c3859d714.jpg', 'image', 'image/jpeg', 1, '2025-11-26 09:08:21', '2025-11-26 09:08:21', NULL),
(198, 'App\\Models\\Wish', 162, 'wishes/wish_162_1764148430_6926c4ce388e9.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 09:13:50', '2025-11-26 09:13:50', NULL),
(199, 'App\\Models\\Wish', 163, 'wishes/wish_163_1764148661_6926c5b5ccbe1.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 09:17:41', '2025-11-26 09:17:41', NULL),
(200, 'App\\Models\\Wish', 164, 'wishes/wish_164_1764148726_6926c5f6e6545.jpg', 'image', 'image/jpeg', 1, '2025-11-26 09:18:46', '2025-11-26 09:18:46', NULL),
(201, 'App\\Models\\Wish', 165, 'wishes/wish_165_1764148983_6926c6f742d45.jpeg', 'image', 'image/jpeg', 1, '2025-11-26 09:23:03', '2025-11-26 09:23:03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fulfillments`
--

CREATE TABLE `fulfillments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `wish_id` bigint(20) UNSIGNED NOT NULL,
  `donation_id` bigint(20) UNSIGNED NOT NULL,
  `donor_id` bigint(20) UNSIGNED NOT NULL,
  `wisher_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('pending','scheduled','in_progress','delivered','cancelled') NOT NULL DEFAULT 'pending',
  `needs_admin_support` tinyint(1) NOT NULL DEFAULT 1,
  `admin_notes` text DEFAULT NULL,
  `scheduled_at` timestamp NULL DEFAULT NULL,
  `delivered_at` timestamp NULL DEFAULT NULL,
  `guardian_confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaders`
--

CREATE TABLE `leaders` (
  `name` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `dob` date DEFAULT NULL,
  `gender` enum('male','female','other') NOT NULL DEFAULT 'male',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fulfilment_id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `receiver_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_09_04_064314_create_donors_table', 1),
(5, '2025_09_04_064331_create_wishers_table', 1),
(6, '2025_09_04_064503_create_leaders_table', 1),
(7, '2025_09_04_064504_create_organizations_table', 1),
(8, '2025_09_04_064505_create_categories_table', 1),
(9, '2025_09_10_100659_create_donations_table', 1),
(10, '2025_09_11_095620_create_wishes_table', 1),
(11, '2025_09_11_095621_create_fulfillments_table', 1),
(12, '2025_09_25_025904_create_messages_table', 1),
(13, '2025_09_27_074950_create_tasks_table', 1),
(14, '2025_09_27_075238_create_moderation_logs_table', 1),
(15, '2025_09_27_075338_create_notifications_table', 1),
(16, '2025_09_27_075456_create_organization_user_table', 1),
(17, '2025_09_27_080148_create_catalogs_table', 1),
(18, '2025_09_27_080149_create_catalog_item_wish_table', 1),
(19, '2025_09_29_030756_create_files_table', 1),
(20, '2025_11_03_022446_create_otps_table', 2),
(21, '2025_11_05_090335_create_roles_table', 3),
(22, '2025_11_05_090637_create_role_user_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `moderation_logs`
--

CREATE TABLE `moderation_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moderatable_type` varchar(255) NOT NULL,
  `moderatable_id` bigint(20) UNSIGNED NOT NULL,
  `moderator_id` bigint(20) UNSIGNED DEFAULT NULL,
  `action` enum('approved','rejected','flagged','auto_flagged') NOT NULL,
  `reason` text DEFAULT NULL,
  `nsfw_score` decimal(3,2) DEFAULT NULL,
  `detected_tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`detected_tags`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `notifiable_type` varchar(255) NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `contact_phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `logo`, `contact_email`, `contact_phone`, `address`, `description`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'MCC', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-02 06:44:56', '2025-10-02 06:44:56', NULL),
(2, 'Glenrich International School', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-02 16:04:57', '2025-10-02 16:04:57', NULL),
(3, 'infratech consultants ltd', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-02 16:16:56', '2025-10-02 16:16:56', NULL),
(4, 'icl', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-02 16:50:29', '2025-10-02 16:50:29', NULL),
(5, 'University of global village', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-04 04:38:24', '2025-10-04 04:38:24', NULL),
(6, 'Govt MB College', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-04 04:52:17', '2025-10-04 04:52:17', NULL),
(7, 'Maple Leaf International school', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-04 05:34:11', '2025-10-04 05:34:11', NULL),
(8, 'Technomagic Pvt Ltd', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-05 04:21:55', '2025-10-05 04:21:55', NULL),
(9, 'Infratech Consultant Ltd', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-05 05:14:42', '2025-10-05 05:14:42', NULL),
(10, 'UCC infrastructures Ltd', NULL, NULL, NULL, NULL, NULL, 1, '2025-10-10 15:24:45', '2025-10-10 15:24:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `organization_user`
--

CREATE TABLE `organization_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role` enum('member','admin','owner') NOT NULL DEFAULT 'member',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_user`
--

INSERT INTO `organization_user` (`id`, `organization_id`, `user_id`, `role`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 6, 'member', 1, NULL, NULL),
(2, 2, 7, 'member', 1, NULL, NULL),
(4, 3, 9, 'member', 1, NULL, NULL),
(5, 4, 10, 'member', 1, NULL, NULL),
(6, 1, 11, 'member', 1, NULL, NULL),
(7, 3, 12, 'member', 1, NULL, NULL),
(8, 5, 13, 'member', 1, NULL, NULL),
(9, 6, 14, 'member', 1, NULL, NULL),
(10, 7, 15, 'member', 1, NULL, NULL),
(11, 8, 16, 'member', 1, NULL, NULL),
(12, 4, 17, 'member', 1, NULL, NULL),
(13, 9, 18, 'member', 1, NULL, NULL),
(14, 1, 19, 'member', 1, NULL, NULL),
(15, 2, 20, 'member', 1, NULL, NULL),
(16, 2, 21, 'member', 1, NULL, NULL),
(17, 2, 22, 'member', 1, NULL, NULL),
(18, 9, 23, 'member', 1, NULL, NULL),
(19, 10, 24, 'member', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('email','phone') NOT NULL DEFAULT 'email',
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `otp` varchar(255) NOT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `type`, `email`, `phone`, `otp`, `is_verified`, `created_at`, `updated_at`) VALUES
(1, 'email', 'lokman.bd.mcc@gmail.com', NULL, '1911', 1, '2025-11-03 16:52:10', '2025-11-03 16:53:42'),
(2, 'email', 'sabbir@infraconsultants.com', NULL, '5531', 1, '2025-11-04 04:30:37', '2025-11-04 04:31:00'),
(3, 'email', 'bijoysaha600@gmail.com', NULL, '7050', 1, '2025-11-04 04:33:10', '2025-11-04 04:33:31'),
(4, 'email', 'Motiur@ndeinfratech.com', NULL, '3756', 1, '2025-11-04 04:49:31', '2025-11-04 04:50:04'),
(5, 'email', 'jazzyr420@gmail.com', NULL, '4051', 1, '2025-11-04 07:34:33', '2025-11-04 07:34:58'),
(6, 'email', 'lokman@gmail.com', NULL, '4592', 1, '2025-11-04 08:21:32', '2025-11-04 08:21:42'),
(7, 'email', 'shanto@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 08:30:23', '2025-11-04 08:30:42'),
(8, 'email', 'amin@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 08:34:59', '2025-11-04 08:35:28'),
(10, 'email', 'maria@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 08:52:07', '2025-11-04 08:52:26'),
(11, 'email', 'jonaki@hashimukh.com', NULL, '4592', 1, '2025-11-04 08:56:33', '2025-11-04 08:56:45'),
(12, 'email', 'khadija@hasimukh.com', NULL, '4592', 1, '2025-11-04 09:00:26', '2025-11-04 09:00:41'),
(13, 'email', 'alamin@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:07:06', '2025-11-04 09:07:16'),
(14, 'email', 'imran@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 09:12:29', '2025-11-04 09:12:43'),
(15, 'email', 'tajim@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:17:55', '2025-11-04 09:18:05'),
(16, 'email', 'sujon@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:23:48', '2025-11-04 09:23:58'),
(17, 'email', 'morsalin@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:28:31', '2025-11-04 09:28:42'),
(18, 'email', 'hasmin@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:35:22', '2025-11-04 09:37:03'),
(19, 'email', 'maruf@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:41:51', '2025-11-04 09:42:05'),
(20, 'email', 'shahanaj@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 09:47:26', '2025-11-04 09:47:37'),
(21, 'email', 'tisan@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 09:51:50', '2025-11-04 09:52:02'),
(22, 'email', 'esan@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 09:56:48', '2025-11-04 09:57:00'),
(23, 'email', 'sayem@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 10:00:33', '2025-11-04 10:00:45'),
(24, 'email', 'rajzz@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:05:49', '2025-11-04 10:06:00'),
(25, 'email', 'jihad@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:09:17', '2025-11-04 10:09:30'),
(26, 'email', 'hashiba@uhashimulhbd.com', NULL, '4592', 0, '2025-11-04 10:13:25', '2025-11-04 10:13:25'),
(27, 'email', 'hasiba@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:13:48', '2025-11-04 10:13:58'),
(28, 'email', 'liza@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:18:51', '2025-11-04 10:19:00'),
(29, 'email', 'tasfiya@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:23:29', '2025-11-04 10:23:39'),
(30, 'email', 'tahmina@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 10:27:47', '2025-11-04 10:27:59'),
(31, 'email', 'shusmita@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:31:09', '2025-11-04 10:31:20'),
(32, 'email', 'sifat@hasinukhbd.com', NULL, '4592', 1, '2025-11-04 10:34:43', '2025-11-04 10:34:51'),
(33, 'email', 'riya@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 10:38:33', '2025-11-04 10:38:45'),
(34, 'email', 'fatema@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 10:54:50', '2025-11-04 10:55:03'),
(35, 'email', 'nupur@hasimukhbd.com', NULL, '4592', 1, '2025-11-04 10:58:39', '2025-11-04 10:58:48'),
(36, 'email', 'rohim@hashimukhbd.co', NULL, '4592', 0, '2025-11-04 11:03:18', '2025-11-04 11:03:18'),
(37, 'email', 'rohim@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 11:04:16', '2025-11-04 11:04:27'),
(38, 'email', 'hafiz@ghasimukhbd.com', NULL, '4592', 0, '2025-11-04 11:08:04', '2025-11-04 11:08:04'),
(39, 'email', 'hafiz@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 11:08:32', '2025-11-04 11:08:41'),
(40, 'email', 'sumaiya@hashimukhbd.com', NULL, '4592', 1, '2025-11-04 11:12:01', '2025-11-04 11:12:10'),
(41, 'email', 'naeim@hasimukhbd.com', NULL, '4592', 1, '2025-11-05 05:57:06', '2025-11-05 05:57:20');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('khadija@hasimukh.com', '$2y$12$u11NDVMvPv.6FsxRwI2.AOnQn9.7PITLNxSYe.m5qvR0kntlxCsQW', '2025-11-05 06:02:33'),
('lokman.cse.pstu@gmail.com', '$2y$12$bYBa8qQwUmzuUmefG7cnnurkRk8kvDPut8vW9tcZPo.28dYuNWlN2', '2025-10-03 05:24:36');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT 'about role',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `slug`, `description`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Super Admin', 'super-admin', NULL, 1, NULL, NULL, NULL),
(2, 'Admin', 'admin', NULL, 1, NULL, NULL, NULL),
(3, 'Donor', 'donor', NULL, 1, NULL, NULL, NULL),
(4, 'Wisher', 'wisher', NULL, 1, NULL, NULL, NULL),
(5, 'Community leader', 'community-leader', NULL, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`id`, `role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 3, 3, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(2, 4, 3, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(3, 3, 4, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(4, 4, 4, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(5, 3, 5, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(6, 4, 5, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(7, 3, 6, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(8, 4, 6, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(9, 3, 7, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(10, 4, 7, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(11, 3, 9, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(12, 4, 9, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(13, 3, 10, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(14, 4, 10, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(15, 3, 11, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(16, 4, 11, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(17, 3, 12, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(18, 4, 12, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(19, 3, 13, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(20, 4, 13, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(21, 3, 14, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(22, 4, 14, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(23, 3, 15, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(24, 4, 15, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(25, 3, 16, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(26, 4, 16, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(27, 3, 17, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(28, 4, 17, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(29, 3, 18, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(30, 4, 18, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(31, 3, 19, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(32, 4, 19, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(33, 3, 20, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(34, 4, 20, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(35, 3, 21, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(36, 4, 21, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(37, 3, 22, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(38, 4, 22, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(39, 3, 23, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(40, 4, 23, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(41, 3, 24, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(42, 4, 24, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(43, 3, 25, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(44, 4, 25, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(45, 3, 26, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(46, 4, 26, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(47, 3, 27, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(48, 4, 27, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(49, 3, 28, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(50, 4, 28, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(51, 3, 29, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(52, 4, 29, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(53, 3, 30, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(54, 4, 30, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(55, 3, 31, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(56, 4, 31, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(57, 3, 32, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(58, 4, 32, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(59, 3, 33, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(60, 4, 33, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(61, 3, 34, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(62, 4, 34, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(63, 3, 35, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(64, 4, 35, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(65, 3, 36, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(66, 4, 36, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(67, 3, 37, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(68, 4, 37, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(69, 3, 38, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(70, 4, 38, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(71, 3, 39, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(72, 4, 39, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(73, 3, 40, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(74, 4, 40, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(75, 3, 41, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(76, 4, 41, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(77, 3, 42, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(78, 4, 42, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(79, 3, 43, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(80, 4, 43, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(81, 3, 44, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(82, 4, 44, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(83, 3, 45, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(84, 4, 45, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(85, 3, 46, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(86, 4, 46, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(87, 3, 47, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(88, 4, 47, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(89, 3, 48, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(90, 4, 48, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(91, 3, 49, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(92, 4, 49, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(93, 3, 50, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(94, 4, 50, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(95, 3, 51, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(96, 4, 51, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(97, 3, 52, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(98, 4, 52, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(99, 3, 53, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(100, 4, 53, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(101, 3, 54, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(102, 4, 54, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(103, 3, 55, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(104, 4, 55, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(105, 3, 56, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(106, 4, 56, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(107, 3, 57, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(108, 4, 57, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(109, 3, 58, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(110, 4, 58, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(111, 3, 59, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(112, 4, 59, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(113, 3, 60, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(114, 4, 60, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(115, 3, 61, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(116, 4, 61, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(117, 3, 62, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(118, 4, 62, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(119, 3, 63, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(120, 4, 63, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(121, 3, 64, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(122, 4, 64, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(123, 3, 65, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(124, 4, 65, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(125, 3, 66, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(126, 4, 66, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(127, 3, 67, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(128, 4, 67, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(129, 3, 68, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(130, 4, 68, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(131, 3, 69, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(132, 4, 69, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(133, 3, 70, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(134, 4, 70, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(135, 3, 71, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(136, 4, 71, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(137, 3, 72, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(138, 4, 72, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(139, 3, 73, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(140, 4, 73, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(141, 3, 74, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(142, 4, 74, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(143, 3, 75, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(144, 4, 75, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(145, 3, 76, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(146, 4, 76, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(147, 3, 77, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(148, 4, 77, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(149, 3, 78, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(150, 4, 78, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(151, 3, 79, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(152, 4, 79, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(153, 3, 80, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(154, 4, 80, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(155, 3, 81, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(156, 4, 81, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(157, 3, 82, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(158, 4, 82, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(159, 3, 83, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(160, 4, 83, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(161, 3, 84, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(162, 4, 84, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(163, 3, 85, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(164, 4, 85, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(165, 3, 86, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(166, 4, 86, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(167, 3, 87, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(168, 4, 87, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(169, 3, 88, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(170, 4, 88, '2025-11-10 22:57:42', '2025-11-10 22:57:42'),
(171, 3, 89, '2025-11-11 07:17:48', '2025-11-11 07:17:48'),
(172, 4, 89, '2025-11-11 07:17:48', '2025-11-11 07:17:48'),
(173, 3, 90, '2025-11-11 07:21:42', '2025-11-11 07:21:42'),
(174, 4, 90, '2025-11-11 07:21:42', '2025-11-11 07:21:42'),
(175, 3, 91, '2025-11-11 07:26:48', '2025-11-11 07:26:48'),
(176, 4, 91, '2025-11-11 07:26:48', '2025-11-11 07:26:48'),
(177, 3, 92, '2025-11-11 07:36:50', '2025-11-11 07:36:50'),
(178, 4, 92, '2025-11-11 07:36:50', '2025-11-11 07:36:50'),
(179, 3, 93, '2025-11-11 07:40:38', '2025-11-11 07:40:38'),
(180, 4, 93, '2025-11-11 07:40:38', '2025-11-11 07:40:38'),
(181, 3, 94, '2025-11-11 07:43:48', '2025-11-11 07:43:48'),
(182, 4, 94, '2025-11-11 07:43:48', '2025-11-11 07:43:48'),
(183, 3, 95, '2025-11-11 07:58:27', '2025-11-11 07:58:27'),
(184, 4, 95, '2025-11-11 07:58:27', '2025-11-11 07:58:27'),
(185, 3, 96, '2025-11-11 08:07:13', '2025-11-11 08:07:13'),
(186, 4, 96, '2025-11-11 08:07:13', '2025-11-11 08:07:13'),
(187, 3, 97, '2025-11-11 08:09:48', '2025-11-11 08:09:48'),
(188, 4, 97, '2025-11-11 08:09:48', '2025-11-11 08:09:48'),
(189, 3, 98, '2025-11-11 08:14:58', '2025-11-11 08:14:58'),
(190, 4, 98, '2025-11-11 08:14:58', '2025-11-11 08:14:58'),
(191, 3, 99, '2025-11-11 08:24:21', '2025-11-11 08:24:21'),
(192, 4, 99, '2025-11-11 08:24:21', '2025-11-11 08:24:21'),
(193, 3, 100, '2025-11-11 08:28:37', '2025-11-11 08:28:37'),
(194, 4, 100, '2025-11-11 08:28:37', '2025-11-11 08:28:37'),
(195, 3, 101, '2025-11-11 08:33:10', '2025-11-11 08:33:10'),
(196, 4, 101, '2025-11-11 08:33:10', '2025-11-11 08:33:10'),
(197, 3, 102, '2025-11-11 08:38:26', '2025-11-11 08:38:26'),
(198, 4, 102, '2025-11-11 08:38:26', '2025-11-11 08:38:26'),
(199, 3, 103, '2025-11-11 08:42:05', '2025-11-11 08:42:05'),
(200, 4, 103, '2025-11-11 08:42:05', '2025-11-11 08:42:05'),
(201, 3, 104, '2025-11-11 08:46:12', '2025-11-11 08:46:12'),
(202, 4, 104, '2025-11-11 08:46:12', '2025-11-11 08:46:12'),
(203, 3, 105, '2025-11-11 08:54:53', '2025-11-11 08:54:53'),
(204, 4, 105, '2025-11-11 08:54:53', '2025-11-11 08:54:53'),
(205, 3, 106, '2025-11-11 08:59:11', '2025-11-11 08:59:11'),
(206, 4, 106, '2025-11-11 08:59:11', '2025-11-11 08:59:11'),
(207, 3, 107, '2025-11-11 09:04:52', '2025-11-11 09:04:52'),
(208, 4, 107, '2025-11-11 09:04:52', '2025-11-11 09:04:52'),
(209, 3, 108, '2025-11-11 09:14:17', '2025-11-11 09:14:17'),
(210, 4, 108, '2025-11-11 09:14:17', '2025-11-11 09:14:17'),
(211, 3, 109, '2025-11-11 09:17:28', '2025-11-11 09:17:28'),
(212, 4, 109, '2025-11-11 09:17:28', '2025-11-11 09:17:28'),
(213, 3, 110, '2025-11-11 09:20:06', '2025-11-11 09:20:06'),
(214, 4, 110, '2025-11-11 09:20:06', '2025-11-11 09:20:06'),
(215, 3, 111, '2025-11-11 09:25:56', '2025-11-11 09:25:56'),
(216, 4, 111, '2025-11-11 09:25:56', '2025-11-11 09:25:56'),
(217, 3, 112, '2025-11-11 09:30:16', '2025-11-11 09:30:16'),
(218, 4, 112, '2025-11-11 09:30:16', '2025-11-11 09:30:16'),
(219, 3, 113, '2025-11-11 09:35:22', '2025-11-11 09:35:22'),
(220, 4, 113, '2025-11-11 09:35:22', '2025-11-11 09:35:22'),
(221, 3, 114, '2025-11-11 10:26:59', '2025-11-11 10:26:59'),
(222, 4, 114, '2025-11-11 10:26:59', '2025-11-11 10:26:59'),
(223, 3, 115, '2025-11-11 10:30:07', '2025-11-11 10:30:07'),
(224, 4, 115, '2025-11-11 10:30:07', '2025-11-11 10:30:07'),
(225, 3, 116, '2025-11-11 10:35:09', '2025-11-11 10:35:09'),
(226, 4, 116, '2025-11-11 10:35:09', '2025-11-11 10:35:09'),
(227, 3, 117, '2025-11-11 10:39:19', '2025-11-11 10:39:19'),
(228, 4, 117, '2025-11-11 10:39:19', '2025-11-11 10:39:19'),
(229, 3, 118, '2025-11-11 10:42:31', '2025-11-11 10:42:31'),
(230, 4, 118, '2025-11-11 10:42:31', '2025-11-11 10:42:31'),
(231, 3, 119, '2025-11-11 10:47:08', '2025-11-11 10:47:08'),
(232, 4, 119, '2025-11-11 10:47:08', '2025-11-11 10:47:08'),
(233, 3, 120, '2025-11-11 10:52:58', '2025-11-11 10:52:58'),
(234, 4, 120, '2025-11-11 10:52:58', '2025-11-11 10:52:58'),
(235, 3, 121, '2025-11-11 10:55:53', '2025-11-11 10:55:53'),
(236, 4, 121, '2025-11-11 10:55:53', '2025-11-11 10:55:53'),
(237, 3, 122, '2025-11-11 11:00:29', '2025-11-11 11:00:29'),
(238, 4, 122, '2025-11-11 11:00:29', '2025-11-11 11:00:29'),
(239, 3, 123, '2025-11-11 11:03:03', '2025-11-11 11:03:03'),
(240, 4, 123, '2025-11-11 11:03:03', '2025-11-11 11:03:03'),
(241, 3, 124, '2025-11-11 11:11:36', '2025-11-11 11:11:36'),
(242, 4, 124, '2025-11-11 11:11:36', '2025-11-11 11:11:36'),
(243, 3, 125, '2025-11-11 11:15:37', '2025-11-11 11:15:37'),
(244, 4, 125, '2025-11-11 11:15:37', '2025-11-11 11:15:37'),
(245, 3, 126, '2025-11-11 11:18:30', '2025-11-11 11:18:30'),
(246, 4, 126, '2025-11-11 11:18:30', '2025-11-11 11:18:30'),
(247, 3, 127, '2025-11-11 11:20:51', '2025-11-11 11:20:51'),
(248, 4, 127, '2025-11-11 11:20:51', '2025-11-11 11:20:51'),
(249, 3, 128, '2025-11-11 11:23:41', '2025-11-11 11:23:41'),
(250, 4, 128, '2025-11-11 11:23:41', '2025-11-11 11:23:41'),
(251, 3, 129, '2025-11-11 11:31:36', '2025-11-11 11:31:36'),
(252, 4, 129, '2025-11-11 11:31:36', '2025-11-11 11:31:36'),
(253, 3, 130, '2025-11-11 11:34:49', '2025-11-11 11:34:49'),
(254, 4, 130, '2025-11-11 11:34:49', '2025-11-11 11:34:49'),
(255, 3, 131, '2025-11-11 11:39:06', '2025-11-11 11:39:06'),
(256, 4, 131, '2025-11-11 11:39:06', '2025-11-11 11:39:06'),
(257, 3, 132, '2025-11-12 07:36:06', '2025-11-12 07:36:06'),
(258, 4, 132, '2025-11-12 07:36:06', '2025-11-12 07:36:06'),
(259, 3, 133, '2025-11-12 07:54:56', '2025-11-12 07:54:56'),
(260, 4, 133, '2025-11-12 07:54:56', '2025-11-12 07:54:56'),
(261, 3, 134, '2025-11-12 08:00:06', '2025-11-12 08:00:06'),
(262, 4, 134, '2025-11-12 08:00:06', '2025-11-12 08:00:06'),
(263, 3, 135, '2025-11-12 08:05:10', '2025-11-12 08:05:10'),
(264, 4, 135, '2025-11-12 08:05:10', '2025-11-12 08:05:10'),
(265, 3, 136, '2025-11-12 08:10:17', '2025-11-12 08:10:17'),
(266, 4, 136, '2025-11-12 08:10:17', '2025-11-12 08:10:17'),
(267, 3, 137, '2025-11-12 08:17:13', '2025-11-12 08:17:13'),
(268, 4, 137, '2025-11-12 08:17:13', '2025-11-12 08:17:13'),
(269, 3, 138, '2025-11-12 08:22:04', '2025-11-12 08:22:04'),
(270, 4, 138, '2025-11-12 08:22:04', '2025-11-12 08:22:04'),
(271, 3, 139, '2025-11-12 09:46:38', '2025-11-12 09:46:38'),
(272, 4, 139, '2025-11-12 09:46:38', '2025-11-12 09:46:38'),
(273, 3, 140, '2025-11-16 07:47:17', '2025-11-16 07:47:17'),
(274, 4, 140, '2025-11-16 07:47:17', '2025-11-16 07:47:17'),
(275, 3, 141, '2025-11-16 07:50:34', '2025-11-16 07:50:34'),
(276, 4, 141, '2025-11-16 07:50:34', '2025-11-16 07:50:34'),
(277, 3, 142, '2025-11-16 08:39:09', '2025-11-16 08:39:09'),
(278, 4, 142, '2025-11-16 08:39:09', '2025-11-16 08:39:09'),
(279, 3, 143, '2025-11-18 10:58:43', '2025-11-18 10:58:43'),
(280, 4, 143, '2025-11-18 10:58:43', '2025-11-18 10:58:43'),
(281, 3, 144, '2025-11-18 11:02:01', '2025-11-18 11:02:01'),
(282, 4, 144, '2025-11-18 11:02:01', '2025-11-18 11:02:01'),
(283, 3, 145, '2025-11-18 11:04:22', '2025-11-18 11:04:22'),
(284, 4, 145, '2025-11-18 11:04:22', '2025-11-18 11:04:22'),
(285, 3, 146, '2025-11-18 11:07:41', '2025-11-18 11:07:41'),
(286, 4, 146, '2025-11-18 11:07:41', '2025-11-18 11:07:41'),
(287, 3, 147, '2025-11-18 11:11:29', '2025-11-18 11:11:29'),
(288, 4, 147, '2025-11-18 11:11:29', '2025-11-18 11:11:29'),
(289, 3, 148, '2025-11-18 11:14:05', '2025-11-18 11:14:05'),
(290, 4, 148, '2025-11-18 11:14:05', '2025-11-18 11:14:05'),
(291, 3, 149, '2025-11-18 11:19:18', '2025-11-18 11:19:18'),
(292, 4, 149, '2025-11-18 11:19:18', '2025-11-18 11:19:18'),
(293, 3, 150, '2025-11-18 11:35:12', '2025-11-18 11:35:12'),
(294, 4, 150, '2025-11-18 11:35:12', '2025-11-18 11:35:12'),
(295, 3, 151, '2025-11-19 05:47:07', '2025-11-19 05:47:07'),
(296, 4, 151, '2025-11-19 05:47:07', '2025-11-19 05:47:07'),
(297, 3, 152, '2025-11-23 11:13:20', '2025-11-23 11:13:20'),
(298, 4, 152, '2025-11-23 11:13:20', '2025-11-23 11:13:20'),
(299, 3, 153, '2025-11-23 11:17:32', '2025-11-23 11:17:32'),
(300, 4, 153, '2025-11-23 11:17:32', '2025-11-23 11:17:32'),
(301, 3, 154, '2025-11-23 11:22:11', '2025-11-23 11:22:11'),
(302, 4, 154, '2025-11-23 11:22:11', '2025-11-23 11:22:11'),
(303, 3, 155, '2025-11-23 11:26:06', '2025-11-23 11:26:06'),
(304, 4, 155, '2025-11-23 11:26:06', '2025-11-23 11:26:06'),
(305, 3, 156, '2025-11-23 11:28:59', '2025-11-23 11:28:59'),
(306, 4, 156, '2025-11-23 11:28:59', '2025-11-23 11:28:59'),
(307, 3, 157, '2025-11-23 11:31:45', '2025-11-23 11:31:45'),
(308, 4, 157, '2025-11-23 11:31:45', '2025-11-23 11:31:45'),
(309, 3, 158, '2025-11-23 11:34:14', '2025-11-23 11:34:14'),
(310, 4, 158, '2025-11-23 11:34:14', '2025-11-23 11:34:14'),
(311, 3, 159, '2025-11-23 11:37:11', '2025-11-23 11:37:11'),
(312, 4, 159, '2025-11-23 11:37:11', '2025-11-23 11:37:11'),
(313, 3, 160, '2025-11-23 11:40:24', '2025-11-23 11:40:24'),
(314, 4, 160, '2025-11-23 11:40:24', '2025-11-23 11:40:24'),
(315, 3, 161, '2025-11-26 05:51:15', '2025-11-26 05:51:15'),
(316, 4, 161, '2025-11-26 05:51:15', '2025-11-26 05:51:15'),
(317, 3, 162, '2025-11-26 07:06:11', '2025-11-26 07:06:11'),
(318, 4, 162, '2025-11-26 07:06:11', '2025-11-26 07:06:11'),
(319, 3, 163, '2025-11-26 07:27:33', '2025-11-26 07:27:33'),
(320, 4, 163, '2025-11-26 07:27:33', '2025-11-26 07:27:33'),
(321, 3, 164, '2025-11-26 07:28:20', '2025-11-26 07:28:20'),
(322, 4, 164, '2025-11-26 07:28:20', '2025-11-26 07:28:20'),
(323, 3, 165, '2025-11-26 07:29:15', '2025-11-26 07:29:15'),
(324, 4, 165, '2025-11-26 07:29:15', '2025-11-26 07:29:15'),
(325, 3, 166, '2025-11-26 07:33:04', '2025-11-26 07:33:04'),
(326, 4, 166, '2025-11-26 07:33:04', '2025-11-26 07:33:04'),
(327, 3, 167, '2025-11-26 07:35:10', '2025-11-26 07:35:10'),
(328, 4, 167, '2025-11-26 07:35:10', '2025-11-26 07:35:10'),
(329, 3, 168, '2025-11-26 07:35:36', '2025-11-26 07:35:36'),
(330, 4, 168, '2025-11-26 07:35:36', '2025-11-26 07:35:36'),
(331, 3, 169, '2025-11-26 07:38:33', '2025-11-26 07:38:33'),
(332, 4, 169, '2025-11-26 07:38:33', '2025-11-26 07:38:33'),
(333, 3, 170, '2025-11-26 07:42:33', '2025-11-26 07:42:33'),
(334, 4, 170, '2025-11-26 07:42:33', '2025-11-26 07:42:33'),
(335, 3, 171, '2025-11-26 07:43:49', '2025-11-26 07:43:49'),
(336, 4, 171, '2025-11-26 07:43:49', '2025-11-26 07:43:49'),
(337, 3, 172, '2025-11-26 07:48:38', '2025-11-26 07:48:38'),
(338, 4, 172, '2025-11-26 07:48:38', '2025-11-26 07:48:38'),
(339, 3, 173, '2025-11-26 07:50:35', '2025-11-26 07:50:35'),
(340, 4, 173, '2025-11-26 07:50:35', '2025-11-26 07:50:35'),
(341, 3, 174, '2025-11-26 07:52:28', '2025-11-26 07:52:28'),
(342, 4, 174, '2025-11-26 07:52:28', '2025-11-26 07:52:28'),
(343, 3, 175, '2025-11-26 07:56:48', '2025-11-26 07:56:48'),
(344, 4, 175, '2025-11-26 07:56:48', '2025-11-26 07:56:48'),
(345, 3, 176, '2025-11-26 08:00:47', '2025-11-26 08:00:47'),
(346, 4, 176, '2025-11-26 08:00:47', '2025-11-26 08:00:47'),
(347, 3, 177, '2025-11-26 08:01:25', '2025-11-26 08:01:25'),
(348, 4, 177, '2025-11-26 08:01:25', '2025-11-26 08:01:25'),
(349, 3, 178, '2025-11-26 08:04:06', '2025-11-26 08:04:06'),
(350, 4, 178, '2025-11-26 08:04:06', '2025-11-26 08:04:06'),
(351, 3, 179, '2025-11-26 08:05:40', '2025-11-26 08:05:40'),
(352, 4, 179, '2025-11-26 08:05:40', '2025-11-26 08:05:40'),
(353, 3, 180, '2025-11-26 08:28:46', '2025-11-26 08:28:46'),
(354, 4, 180, '2025-11-26 08:28:46', '2025-11-26 08:28:46'),
(355, 3, 181, '2025-11-26 08:36:44', '2025-11-26 08:36:44'),
(356, 4, 181, '2025-11-26 08:36:44', '2025-11-26 08:36:44'),
(357, 3, 182, '2025-11-26 08:41:32', '2025-11-26 08:41:32'),
(358, 4, 182, '2025-11-26 08:41:32', '2025-11-26 08:41:32'),
(359, 3, 183, '2025-11-26 08:44:17', '2025-11-26 08:44:17'),
(360, 4, 183, '2025-11-26 08:44:17', '2025-11-26 08:44:17'),
(361, 3, 184, '2025-11-26 08:44:28', '2025-11-26 08:44:28'),
(362, 4, 184, '2025-11-26 08:44:28', '2025-11-26 08:44:28'),
(363, 3, 185, '2025-11-26 08:49:32', '2025-11-26 08:49:32'),
(364, 4, 185, '2025-11-26 08:49:32', '2025-11-26 08:49:32'),
(365, 3, 186, '2025-11-26 09:03:12', '2025-11-26 09:03:12'),
(366, 4, 186, '2025-11-26 09:03:12', '2025-11-26 09:03:12'),
(367, 3, 187, '2025-11-26 09:04:14', '2025-11-26 09:04:14'),
(368, 4, 187, '2025-11-26 09:04:14', '2025-11-26 09:04:14'),
(369, 3, 188, '2025-11-26 09:07:46', '2025-11-26 09:07:46'),
(370, 4, 188, '2025-11-26 09:07:46', '2025-11-26 09:07:46'),
(371, 3, 189, '2025-11-26 09:10:21', '2025-11-26 09:10:21'),
(372, 4, 189, '2025-11-26 09:10:21', '2025-11-26 09:10:21'),
(373, 3, 190, '2025-11-26 09:16:47', '2025-11-26 09:16:47'),
(374, 4, 190, '2025-11-26 09:16:47', '2025-11-26 09:16:47'),
(375, 3, 191, '2025-11-26 09:17:37', '2025-11-26 09:17:37'),
(376, 4, 191, '2025-11-26 09:17:37', '2025-11-26 09:17:37'),
(377, 3, 192, '2025-11-26 09:21:30', '2025-11-26 09:21:30'),
(378, 4, 192, '2025-11-26 09:21:30', '2025-11-26 09:21:30');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('EX54a7remYTkM8MW4chdENYOtZnT6gC4YLlp99Ys', 3, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiRUEwQ3E2Q2FLSHo1VFVrV3Q4ZEY1VVp5Q0huRmRLaExncDJjUUo2OCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTozO30=', 1762830757),
('k2g6ZumSf2LMiHFjf0CTeAI6RFUBNL9E9HUAF21S', 3, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiRWxQYmZHNFZkRlpDd2owR0tZSUphbU1YTmVzWHpaeGJWZXZnWGJ0ZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTozO30=', 1762837091);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fulfilment_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'assigned admin id',
  `task_notes` text DEFAULT NULL,
  `activity_log` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`activity_log`)),
  `assigned_at` timestamp NULL DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `status` enum('new','assigned','in_progress','completed','cancelled') NOT NULL DEFAULT 'new',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `dob` date NOT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_phone` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `gender` enum('male','female','other') NOT NULL DEFAULT 'male',
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `image`, `dob`, `guardian_name`, `guardian_phone`, `relationship`, `gender`, `latitude`, `longitude`, `address`, `is_verified`, `is_active`, `email_verified_at`, `phone_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Super Admin', 'superadmin@example.com', '01710000001', NULL, '1994-10-04', NULL, NULL, NULL, 'male', NULL, NULL, NULL, 1, 1, NULL, NULL, '$2y$12$6GsOFPIl22./XZn.A2UXje78V6dHkXzGf0dOBwv/tL.YFQm6T7q1u', NULL, '2025-10-02 06:41:23', '2025-10-14 12:41:12', NULL),
(2, 'Admin User 1', 'admin1@example.com', '01723300001', NULL, '1994-10-04', NULL, NULL, NULL, 'male', 34.05220000, -118.24370000, NULL, 0, 0, NULL, NULL, '$2y$12$DxMO0SqloGBLbQMPUtvTgezC2yt4urYQIR287F0cdLJaFfJNXtTmm', NULL, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(3, 'Donor User 1', 'donor1@example.com', '01720000001', 'photos/35xehSHWlsMEv6O6b0Ekaz42K2CtL0FM9jlChB6S.png', '1994-10-04', NULL, NULL, NULL, 'male', 23.80063870, 90.42456630, 'Baridhara J Block, Dhaka 1212, Bangladesh', 0, 0, NULL, NULL, '$2y$12$oSRwqjqBXIvfc.R/h/aopuiOLMWQg9uT2Q66OaySpBN3ot5cmEKsC', NULL, '2025-10-02 06:41:24', '2025-10-05 09:50:26', NULL),
(4, 'Wisher User 1', 'wisher1@example.com', '01730000001', NULL, '1994-10-04', NULL, NULL, NULL, 'male', 34.05220000, -118.24370000, NULL, 0, 0, NULL, NULL, '$2y$12$v4CnxQbKCB5RdzKxMuPYle6FTC9t2LtN0VEowG6IzD23blB1V6iUi', NULL, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(5, 'Leader User 1', 'leader1@example.com', '01740000001', NULL, '1994-10-04', NULL, NULL, NULL, 'male', 34.05220000, -118.24370000, NULL, 0, 0, NULL, NULL, '$2y$12$4qDPwBHYRm/H/HzBmnbeCOofvMXK46sKY9Bv8xQb/wS.MmLWE4JRq', NULL, '2025-10-02 06:41:24', '2025-10-02 06:41:24', NULL),
(6, 'Lokman Hosen', 'lokman.cse.pstu@gmail.com', '01738564792', 'photos/D4tEYftEp4k0FmVQ4HiKz0z0BPup9fOBqYJXZJBE.jpg', '1994-10-04', NULL, NULL, NULL, 'male', 23.80741281, 90.41569948, 'Adeed from Map', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$d/2n35YwIvwecsZyG5bLA.DdB06plqHzLMwS11qQ3d30mYskNQYsy', 'fI9hGJ90K4SrkszqTHwnmO9wRZ6Xjoev1insJ8cITbJV6eI6Q2yumJWsJn6n', '2025-10-02 06:44:57', '2025-11-10 21:09:46', NULL),
(7, 'Rehan Ashraf Khan', 'rehanashrafkhan2025@gmail.com', '01400158391', NULL, '2000-04-07', NULL, NULL, NULL, 'male', 47.00913400, 28.81671920, 'Radiocomunicații, Centru Sector, Chișinău, Chișinău Municipality, Moldova', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$i9lXWdzS12bnkfD4AEIhHuOFnjRfwp0a16tKAPpa.tzqrnZF6/rLC', 'xUWv1XnSu6SCp7XvVzN8xjGyF3yWm1QY0t9VrZzPgMJXWE7DtpFBcjtMKiI2', '2025-10-02 16:04:57', '2025-11-10 21:09:46', NULL),
(9, 'Venus Fox', 'malumut@mailinator.com', '01758654785', 'photos/8QKh5lQgH7Kz7TBs2S1jnGshbAglnx0VSMXuD0KK.jpg', '2025-10-04', 'Eaton Walsh', '01726589478', 'aunt', 'male', NULL, NULL, 'Enim ut in maxime do', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$DowvwQY9Oo2kynRDDwom0Ofmp1PCEhaSS8Xq16gYgvPFCUcr3q1A.', NULL, '2025-10-02 16:44:44', '2025-11-10 21:09:46', NULL),
(10, 'Ashraf khan', 'ashrafabir@gmail.com', '01755520220', 'photos/t4Rvz1XlzeMoUQDhoKn8QoBrUndKOixegAG6s44w.jpg', '1982-11-08', NULL, NULL, NULL, 'male', NULL, NULL, NULL, 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$D5KlZTP2bGf7iU15c54weeSh.QJh8yrswl7FwtEZQ1d4Tq9raq1lG', 'hfUkssChJve49uRCaj5ebTd5q8g9ar3CCAzsmtg8EV2KHlky64odzrDSchWb', '2025-10-02 16:50:29', '2025-11-10 21:09:46', NULL),
(11, 'Lokman donor', 'lokman1@gmail.com', '01758696321', 'photos/idkBKnY1Rj1KLOlW1opdWwVSGbBmUlU2aQc1UXM5.png', '1994-10-04', NULL, NULL, NULL, 'male', 12.35590000, 31.34790000, 'My address here', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$A3e7q.PzPZ0bzt8laNZM.OEOHOA4TDtKSz5qqR0UjdDfN0IBonf5O', NULL, '2025-10-02 16:50:46', '2025-11-10 21:09:46', NULL),
(12, 'Rakibul Islam', 'innocentboyrakib72@gmail.com', '01755139328', 'photos/rGlDt99BpFBhZzrkpk3XcGF2i2eavwSUZXlNXsbE.jpg', '2025-10-20', 'Gjjjkkh', '01796558754', 'sibling', 'male', 23.77990570, 90.40831550, 'Mohakhali, Bir Uttam A. K. Khandakar Road, Gulshan 1, Mohakhali, Dhaka, Dhaka Metropolitan, Dhaka District, Dhaka Division, 1213, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$W4jrZ5oE21hF77NmWfsCPOiiMWXQ0RHYM7IUweZAvVv3//1QbAI9W', NULL, '2025-10-02 18:38:33', '2025-11-10 21:09:46', NULL),
(13, 'JOBAYDUL HASAN', 'jobaydul.cse@gmail.com', '01765967773', 'photos/fGxcjoxhimDnClzK7cab2FFHixHBOnXoXn6hsnCH.jpg', '2001-02-18', NULL, NULL, NULL, 'male', 22.71328760, 90.34962780, 'Barishal, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$qns85nXGMXqSIwDPHMG1OOb8Dtx4SLRB5P9mnBnQQdo.aykrYzUIi', NULL, '2025-10-04 04:38:24', '2025-11-10 21:09:46', NULL),
(14, 'Jahanara Begum', 'j01717886712@gmail.com', '01717886712', NULL, '1967-10-01', NULL, NULL, NULL, 'female', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$bwIUFHdZCi3ItI2.djvxsOy57vzWelm4P2tpmlEvJq47TOA.6jawW', NULL, '2025-10-04 04:52:17', '2025-11-10 21:09:46', NULL),
(15, 'Fayzah Islam Shehjeen', 'tayhid@hmail.com', '01733211914', NULL, '2015-01-20', 'Tayhidul Islam', '01733211914', 'parent', 'female', 23.74863940, 90.39897170, 'New Eskaton, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$nUuwWSYJHNx9s8XyfBumV.CkbCVhX.mXeZOgbs9TbHxIP4VxJPAqG', NULL, '2025-10-04 05:34:11', '2025-11-10 21:09:46', NULL),
(16, 'Nahian', 'nahianbinabdullah777@gmail.com', '01751076767', 'photos/PoC5kr7eHRqh61yfwbgClqZLx099Wvt8QmFnaB51.jpg', '1996-02-26', NULL, NULL, NULL, 'male', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$fxE4AnYr/qXdTjmVXHr1vuBp.ULizaoa7t4ehRRmU9vAjpmetzduK', NULL, '2025-10-05 04:21:56', '2025-11-10 21:09:46', NULL),
(17, 'Ataul Iqbal Rubel', 'atauliqbalrubel@gmail.com', '01870700455', NULL, '1993-06-06', NULL, NULL, NULL, 'male', 23.80764770, 90.42132390, 'House - 83 Sohrawardy Ave, Dhaka 1212, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$sBlo0R3AOQ3uDPAVky/YW.y6k2EmWzsIYH6ReL2n6JXvEFs9KKBie', NULL, '2025-10-05 05:13:27', '2025-11-10 21:09:46', NULL),
(18, 'Syed Sabbir Kabir', 'sskabir5343@gmail.com', '01675013562', NULL, '1983-11-30', NULL, NULL, NULL, 'male', 23.71081540, 90.42010230, '79 Sharat Gupta Rd, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$0fx7EddbPncr3GBEtcLX1uAndG80YJiH6UgGEImqzNsgAnIoQPqdW', NULL, '2025-10-05 05:14:42', '2025-11-10 21:09:46', NULL),
(19, 'Rezaul', 'ocimuktadir@gmail.com', '01913960478', NULL, '1988-02-11', NULL, NULL, NULL, 'male', 23.79989840, 90.42076600, 'Baridhara, Dhaka 1212, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$0m3SKnCXASJHRDtOcFrKTeRb5cFZWb5zfSNnbj2hkBMFiLqTTNyUK', NULL, '2025-10-05 06:19:33', '2025-11-10 21:09:46', NULL),
(20, 'Anaya Zoya Chowdhury', 'anayazch@gmail.com', '01601014074', NULL, '2009-07-16', 'Faria Sanzina Alam', '01911310833', 'parent', 'female', 23.80220480, 90.41609040, '18 Rd No 79, Dhaka 1212, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$vxycur72EYiLz/tYrEp69OWMkcssgEwZOJDBdH1QorvNJXOC/rHkO', NULL, '2025-10-05 11:23:30', '2025-11-10 21:09:46', NULL),
(21, 'Faika Jebadiyah', 'faika.jdyah@gmail.com', '01554433744', NULL, '2009-11-20', 'Farhana Afroze', '01550155103', 'parent', 'female', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$GCyfUqwdSCrDY2hJp.JC0ubS970GAUzZcXOTW2dGmy8mhWRH/bN5G', NULL, '2025-10-05 11:37:42', '2025-11-10 21:09:46', NULL),
(22, 'Shimaz Fatima', 'shimazfatima14@gmail.com', '01841253963', NULL, '2005-09-06', NULL, NULL, NULL, 'female', 23.78206240, 90.41605270, 'Gulshan 1, Dhaka 1212, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$Cw9O9KlQShM3nfKrqH7W4OzjEbdrrBMGs4AeR7twLiZA9RDx9rNMq', NULL, '2025-10-05 14:13:26', '2025-11-10 21:09:46', NULL),
(23, 'Md Delowar Hossain', 'civil.delowar@gmail.com', '01744320769', NULL, '1996-11-06', 'Md Jonab ali khan', '01765230714', 'parent', 'male', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$qFrpYeIvVv/3hCiIcsHFXOjugVYyKCbhUy2IJe.CElXie0p2uWIfW', NULL, '2025-10-10 15:21:10', '2025-11-10 21:12:37', NULL),
(24, 'Siratul muntaha raisa', 'foijawc@gmail.com', '01797423387', NULL, '2014-09-09', 'Foij Ahammad', '01797423387', 'uncle', 'female', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$Pr/IgmnPtH/zXdmX9cEO/OdDrSPND4DwAoIEl/Ya1VZtWz/UxJC8C', NULL, '2025-10-10 15:24:45', '2025-11-10 21:12:37', NULL),
(25, 'Md. Sazzad Hossain Syeem', 'sazzadsyeem@gmail.com', '01911460570', NULL, '1993-11-17', NULL, NULL, NULL, 'male', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$Q4ed..kAsNJYA6SoZA.0v.kQTggzN9eweWY5sjY5UZjrNM5KN5wOu', NULL, '2025-10-12 04:31:24', '2025-11-10 21:12:37', NULL),
(26, 'Alamgir hussain', 'alamgirhussain62070@gmail.com', '01316425900', NULL, '1997-11-27', NULL, NULL, NULL, 'male', 23.76412810, 90.44669910, 'Aftab Nagar, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$21uYimJ.czpeZ6ljoJLeHe03Jh7QX71XsED1zaSTC6wg5DFmpo0bO', NULL, '2025-10-12 11:14:02', '2025-11-10 21:12:37', NULL),
(27, 'Md.Firoz', 'md.firozffe@gmail.com', '01625997011', 'photos/i3KucpggCjif02MIOuHC6Opx24i5vhCCSDcpB2ll.jpg', '1994-05-04', NULL, NULL, NULL, 'male', 23.79560370, 90.35365480, 'Mirpur-1, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$mAaqHz4wAhqfUT7hqOJyJe.2URLJsmUNx0DzZeSatsjGp.K3gWPAC', NULL, '2025-10-13 08:14:08', '2025-11-10 21:12:37', NULL),
(28, 'Jewel', 'ajewel567@gmail.com', '01763952384', 'photos/s8B7u5vCPTYkeP18rHizmSTffcdEii2zXrZO3MZn.jpg', '1999-05-01', NULL, NULL, NULL, 'male', 24.75385750, 90.40729190, 'Mymensingh District, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$Ie5S/lVexQxrz0ljIaib1OUUzv/5A1UM4XSmZkAuCmtrvERLv0xiS', NULL, '2025-10-13 08:25:15', '2025-11-10 21:12:37', NULL),
(29, 'Ataul Iqbal Rubel', 'atauliqbalrubel1@gmail.com', '01614537633', 'photos/0PbbYFCf1nX9M4bZwbXYsycRH7nJgNrV7KjuxtKO.png', '2022-10-06', NULL, NULL, NULL, 'male', 23.79254670, 90.40155180, 'House# 22 Road# 4, Dhaka 1213, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$lXQnRBZC4cA6LaM3nRCrlOrioFrz8izlv6.andS53EOV2XSTC3DL2', NULL, '2025-10-13 08:26:32', '2025-11-10 21:12:37', NULL),
(30, 'Bijoy Saha', 'bijoy@ndeinfratech.com', '01628755278', 'photos/y6EEsG9mSHblkiq2oynzjeo9cCVt0qi4E9Tr3Aq4.jpg', '1997-08-01', NULL, NULL, NULL, 'male', 23.76616390, 90.35887340, 'Mohammadpur, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$LUxGkfYU6wU5kNOI28fhlu.OfXt1SItouQLtkcneS02Tbi824vDp2', NULL, '2025-10-13 08:33:20', '2025-11-10 21:12:37', NULL),
(31, 'Samiha', 'samiha@uihp.org', '01679772117', NULL, '1998-07-28', NULL, NULL, NULL, 'female', 23.79367060, 90.40660820, 'Banani, Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$23dxbRiCCCmrgdp63HwT2eL5U/vda5gjOyjWVsDGoTxGr6HhTZKLm', NULL, '2025-10-15 04:51:11', '2025-11-10 21:09:46', NULL),
(32, 'Rafi Chowdhury', 'alamanur2000@gmail.com', '01943095884', 'photos/FPJsiAyFHK0jKL1sDsD5YjW2oSqMhS7dZYAxwHxR.jpg', '2000-08-29', NULL, NULL, NULL, 'male', 23.75610670, 90.38719610, 'Farmgate, Dhaka 1215, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$m0IBM/CNwCFF0QLGVIir7evwbGEJVVmXmTmacVN.8Zy3SflCMX4L6', 'Mfdt52v1QIFbkprsyf5WuDnb1UG9LIvUz4IvP8dUFhemmSrLdTVwRRGX1lHh', '2025-10-16 07:53:39', '2025-11-10 21:12:37', NULL),
(33, 'Fayaz Shafqat Islam', 'fayazshehran@gmail.com', '01977066736', NULL, '2008-10-31', NULL, NULL, NULL, 'male', 23.80409300, 90.41523760, 'Dhaka, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$mok2c3T2tHyVHT659d0FZuV/MRN8tQXfgWn8OBseDDNAvstXRtspq', NULL, '2025-10-22 18:27:50', '2025-11-10 21:09:46', NULL),
(34, 'Shawon', 'ashraf@uccl.com.bd', '01731061200', 'photos/WwPrKyZXCsS3zSn2JrfNYBaizyWV2MBBh61TBij6.jpg', '2015-12-31', NULL, NULL, NULL, 'male', 23.74614950, 90.37423070, 'Dhanmondi, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$yXLRIvIWMogGIYsKCEHjI.6wd1WxUwzk1M9nRSLNGkIDo5FShZHbW', 'bWexX3nMtEHSE1iAROC1Mq730fuWqJrc2onhEqea2IAr9QpeKziYEl1qV9NG', '2025-10-27 12:30:57', '2025-11-10 21:12:37', NULL),
(35, 'hello', 'dajskdjasgd@gmail.com', '01111111111', 'photos/HICCaCGNFXkHzkWnnd3lUKr4hhOC4NSjjBdAoOcU.jpg', '2025-10-02', NULL, NULL, NULL, 'other', 23.79013490, 90.41693550, 'Plot# 08 Rd 111, Dhaka 1212, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$jjN1Y5/HNV7yY2E7DVK7ae1sF0C/dKh1KaY2Tzzra9mHtwh6VJYu.', NULL, '2025-10-28 11:53:32', '2025-11-10 21:12:37', NULL),
(36, 'Motiur', 'Motiur@ndeinfratech.com', '01771588929', NULL, '1998-02-24', NULL, NULL, NULL, 'male', 23.80851640, 90.35580580, 'Rupnagar R/A, ঢাকা 1216, Bangladesh', 1, 1, '2025-11-10 21:09:46', '2025-11-10 21:09:46', '$2y$12$1veHdl8FEfvNjhWWinfWA.ydiMSZNu0TCQodKo1/WMu5bueXWotg2', NULL, '2025-11-04 04:51:08', '2025-11-10 21:09:46', NULL),
(37, 'ABC', 'jazzyr420@gmail.com', '01717055559', 'photos/MFKRQmCj8rDVXIetJFIcheZJYhokv0eK9SCeRs7L.jpg', '2005-10-31', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$ua90UzXQ5ddbjm9aHCfaD.bUlktxg4iSvMmaduQ6VFPfmKHeity92', NULL, '2025-11-04 07:36:55', '2025-11-10 21:12:37', NULL),
(38, 'Shanto', 'shanto@hashimukhbd.com', '01777389466', 'photos/MyJzubX4D5bngTHQb6zuksF9kahxkaJDzkqnApqN.jpg', '2007-09-19', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$/3qeUCJcSDUKVrSEm9PkF.e2uMUGxyi/DPuAnWZk4bT3HKJ3kSA.u', NULL, '2025-11-04 08:32:27', '2025-11-10 21:12:37', NULL),
(39, 'Khadija', 'khadija@hasimukh.com', '01795292220', 'photos/ukTpzhZSFjI6IMhlphb1yhWvgYv4ignmomxzw5Di.jpg', '2013-08-03', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$AZHuASZr1A6ZZnbnbgE.xebSjNjRBgjbaqNTwmuUTVV2VfUb/08Z.', NULL, '2025-11-04 09:02:34', '2025-11-10 21:12:37', NULL),
(40, 'Alamin', 'alamin@hashimukhbd.com', '01751715895', 'photos/xJKqkATgW0pEONUJrnO9kmvMZX8yXspmwiDIKbeF.jpg', '2015-07-25', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$mvUMXGbYQqHD913VovJOtu5FPpmi4uZ/.9zzCrvvRqK73ix.W04NC', NULL, '2025-11-04 09:09:05', '2025-11-10 21:12:37', NULL),
(41, 'Imran', 'imran@hasimukhbd.com', '01918278381', 'photos/IEbJEefAYqudPFfDzCA3gZzx22ozk4z6ZHaFzevq.jpg', '2016-12-11', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$CnYIF3vHMAT5dKwm8wzzKu69WecZFX6M3EWzkf65AxPXCASTpbC/e', NULL, '2025-11-04 09:15:27', '2025-11-10 21:12:37', NULL),
(42, 'Tajim', 'tajim@hashimukhbd.com', '01765830002', 'photos/qvLjbR2OSgsqidGlqWL6BT4zUIuwk1Oc9Zhn40q2.jpg', '2017-03-01', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$1fgO2ui8QwohRD35ovwa5OvzV0G16sQVBbwqCjIwqW3KHxI0T7UYS', NULL, '2025-11-04 09:20:43', '2025-11-10 21:12:37', NULL),
(43, 'Sujon', 'sujon@hashimukhbd.com', '01323156442', 'photos/UJZabcfGN2HHURmqwHgPN9KrGeZygNnLnXQ1vQUu.jpg', '2012-11-19', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$xwYElywZ2ro7Ug1lohWkZurfgKF4kgrM9eJL0CycnLGL8HjsLo70S', NULL, '2025-11-04 09:25:38', '2025-11-10 21:12:37', NULL),
(44, 'Morsalin', 'morsalin@hashimukhbd.com', '01741405707', 'photos/Q9CuEoGK78Qsy637ZKUZAC0rC32Bi9Vxx69NOBWd.jpg', '2014-12-31', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$i6E.wrznES0oKLvW6urbPeTpjZ3TiUqlJJqj3G6PjImEi5YBYoA8.', NULL, '2025-11-04 09:30:50', '2025-11-10 21:12:37', NULL),
(45, 'Hasmin', 'hasmin@hashimukhbd.com', '01756545637', 'photos/zKjT3A20QVWYakviS8bBczcb6liwzklZ218zU6ct.jpg', '2013-02-21', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$d3ew9ODLAvhmDjzSJyWDcu.L2rUkHKnLem8n.47v713ZPc6sizdL6', NULL, '2025-11-04 09:40:01', '2025-11-10 21:12:37', NULL),
(46, 'Maruf', 'maruf@hashimukhbd.com', '01799044617', 'photos/H3mLJsPh4rNfQ5ynny4Fymzt0qz3R4mfgRmTsA5s.jpg', '2017-07-21', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$2GaxIm5OMFBSurF1AE1MieTkPp6rFfuc27hNqBI1JvrW7ZpOP657i', NULL, '2025-11-04 09:44:26', '2025-11-10 21:12:37', NULL),
(47, 'Sahnaj', 'shahanaj@hasimukhbd.com', '01738698704', 'photos/IMLQoasDvbBdHvsQndbX5lHnpICZ2Wo75ozS2Mkf.jpg', '2012-12-31', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$NYpGuFxE1OMC41EqF8jxx.tn4kTsmpRkkblHR316HttWtBH3FYc9e', NULL, '2025-11-04 09:49:44', '2025-11-10 21:12:37', NULL),
(48, 'Tisan', 'tisan@hashimukhbd.com', '01756375373', 'photos/lihTxp4mTfZwxtqVddM9tpV4zhuOx2PaOsiI7uw1.jpg', '2010-07-18', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$t1H8CMNDLprrlAOWpaN1B.MFwTlvnR1Rpx4Dkg1MYznOJ23aiRyFq', NULL, '2025-11-04 09:54:26', '2025-11-10 21:12:37', NULL),
(49, 'Esan', 'esan@hasimukhbd.com', '01786462492', 'photos/1ntPlGdWxoVMEBvocfCAX4fwzTFvtLNQSPdumLVl.jpg', '2016-07-24', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$dHF/zw5xYvoBXI4bylqhEuPxyFsn10vBInihVijZ4Qt4flEQVe6Nq', NULL, '2025-11-04 09:59:02', '2025-11-10 21:12:37', NULL),
(50, 'Sayem', 'sayem@hasimukhbd.com', '01732163612', 'photos/yGwz7n9CBefsyVIT3ugB5Cuc4TGxPuXU35HH0gkt.jpg', '2014-07-31', NULL, NULL, NULL, 'male', 23.74136180, 90.39204610, 'P9RR+JR7, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$FSMdQyELULiaZeUkc42IwOfr3mPwmIFmM6WRwlcnWG3sArRKBO7BW', NULL, '2025-11-04 10:02:56', '2025-11-10 21:12:37', NULL),
(51, 'Raj', 'rajzz@hashimukhbd.com', '01712785807', 'photos/CjyELvcoiFLTFSZWXH6bUB3WsI672YCnTChPifTU.jpg', '2014-12-16', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$3WZ6kV0/SH2veOWw19tucOt.FYEx4B071BaIWbTmJBtHkx08.gjx6', NULL, '2025-11-04 10:07:46', '2025-11-10 21:12:37', NULL),
(52, 'Jihad', 'jihad@hashimukhbd.com', '01317424205', 'photos/IPpzlKNYlVal3gP9Gk17uQYEVxGF1gAoj47lccN2.jpg', '2014-05-31', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$/XUevgR1o6HzrefJkYZB3ebGBGaSW6aw.VIOTC2rSzXilVa9GsY8i', NULL, '2025-11-04 10:11:16', '2025-11-10 21:12:37', NULL),
(53, 'Hasiba', 'hasiba@hashimukhbd.com', '01793611271', 'photos/yB6PNMFJKvWsPz2MzCgZarHyGMwtQmjWuZwa6Ldt.jpg', '2015-11-22', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$wLuaE9HRIqG8JDkEYDZMsOad9524rZMvvgo5gz1MXHA8zu.GUus3O', NULL, '2025-11-04 10:15:44', '2025-11-10 21:12:37', NULL),
(54, 'Liza', 'liza@hashimukhbd.com', '01780914408', 'photos/v86kpVoCXVuzeVB7jH5c4Kv9CWgRCv8yO3gX2nJu.jpg', '2015-11-02', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$6DSahY6qUsGmWZrCwwvbCekCwbx9tXXZ4nUjN0Pjv2KkpGXw74WlC', NULL, '2025-11-04 10:21:30', '2025-11-10 21:12:37', NULL),
(55, 'Tasfiya', 'tasfiya@hashimukhbd.com', '01309569712', 'photos/7vAl6tX7glSOFcXP2gkLVIlntLhkCi5mIlgAqpXM.jpg', '2015-10-15', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$SY6WS6tkkYQ/TkAkZtO5Bej2/p40m08.XzchQtrTGQJVJW/NUafy2', NULL, '2025-11-04 10:25:03', '2025-11-10 21:12:37', NULL),
(56, 'Tahmina', 'tahmina@hasimukhbd.com', '01921556516', 'photos/ln55S20A4iPg4mG1BWbVUo7wxlZur6hjdHwxocOU.jpg', '2014-02-28', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$DpIVe9DrFpk1jdAsGlFwXO4m2Hg8CvFNp9d7Zfwhf5mUn3buLN0im', NULL, '2025-11-04 10:29:52', '2025-11-10 21:12:37', NULL),
(57, 'Shusmita', 'shusmita@hashimukhbd.com', '01714066244', 'photos/ZsWC0obkkPmUQWZ8xMZUXSQneBUcuilZwaDuBrpc.jpg', '2014-11-15', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$NYtzLYLKiwTgbq6NM0WGG.5fmDqcI4ZUmAB0aC/CktKzw8aGKsM0q', NULL, '2025-11-04 10:32:42', '2025-11-10 21:12:37', NULL),
(58, 'Sifat', 'sifat@hasinukhbd.com', '01783424440', 'photos/us2TX3pB8SeBg2nJVWug5So09VLA8pD1UFaIEJwn.jpg', '2015-05-31', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$ukKrMNi99N6GbqCVE/jzHuXQH4MoFm4agrNEISchfCgfjSNWaM7bC', NULL, '2025-11-04 10:36:37', '2025-11-10 21:12:37', NULL),
(59, 'Riyamoni', 'riya@hashimukhbd.com', '01795249714', 'photos/zyx6S6v0SrKEpPtjzaMmkWHQTKJ65ZuiEpJxluB8.jpg', '2013-07-17', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$U4POGJ90GMBtFEgSm09lbuvd8O/9wZN3I/hC7S8lIcdstpvNZSLqG', NULL, '2025-11-04 10:40:53', '2025-11-10 21:12:37', NULL),
(60, 'Fatema', 'fatema@hasimukhbd.com', '01913807841', 'photos/hKxhoX3lv48hG67Uzr6Th7ukwGhrIJogV8WA4rEs.jpg', '2015-01-12', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$UikPHcGJcyaas3Kzrlj0huT.QxQZi5.rYBY2uOeooSvVQD4jSw7m2', NULL, '2025-11-04 10:57:16', '2025-11-10 21:12:37', NULL),
(61, 'Nupur', 'nupur@hasimukhbd.com', '01924362175', 'photos/SZFEX2egZewFNRP14XWEJT62MFgSvJBb9XKYmRk6.jpg', '2012-10-04', NULL, NULL, NULL, 'female', 23.74136180, 90.39204610, 'P9RR+JR7, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$3KarCGmV97q.qnR.cwVdX.C1fvRjOTNVorsV1F1agkFYiMeXl/6Rq', NULL, '2025-11-04 11:00:18', '2025-11-10 21:12:37', NULL),
(62, 'Rohim', 'rohim@hashimukhbd.com', '01786533912', 'photos/pf7lls9nEMaoUxsx5AtajNuVp5nvThGnPDQDa9wO.jpg', '2017-08-27', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$ke.m4mTKK9hqASq.fkuere8NCV.UJlwJu1T4fH/UNxlwaemUNgWjS', NULL, '2025-11-04 11:06:28', '2025-11-10 21:12:37', NULL),
(63, 'Hafizul', 'hafiz@hashimukhbd.com', '01785595188', 'photos/FjfcNZ2XIhTNtSMjdBG4gFXK0mTxWkIoMvQbcPek.jpg', '2015-10-09', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$vFQiNw62gYUxedzMpfwetOhKJoECcXXw4H1zd2dkcVtpqbURMwiQK', NULL, '2025-11-04 11:09:57', '2025-11-10 21:12:37', NULL),
(64, 'Sumaiya', 'sumaiya@hashimukhbd.com', '01778883865', 'photos/1K5zfD0rs6IwAqKajKgTiSORRMJA466NXnFkJQDg.jpg', '2013-01-02', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$6.suC62PZMLFO.jQwgK6F.q2KLUooPspj/AlsNWRDobvl9XcH4o3C', NULL, '2025-11-04 11:15:30', '2025-11-10 21:12:37', NULL),
(65, 'Naeim', 'naeim@hasimukhbd.com', '01627295530', 'photos/JwqVcegyTedVPuJueCkKzrkP6gtvUdlexeWiZy5L.jpg', '2008-06-11', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$S5qGLxToXNaBddF9chUyJusdr.rgblYE3YTDXPMri9of4eiSMv3JW', NULL, '2025-11-05 06:00:17', '2025-11-10 21:12:37', NULL),
(66, 'Safin', 'safin@hashimukhbd.com', '01902315522', 'photos/UNtZlJ8oGaY94ZlBkGXoKAiB9RNooPUP1uEdpjwR.jpg', '2019-01-27', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$SVUpSwBfqLHRQvfjAeawgO11Gji1p1cQy2o1kmK2IuzmYzty6mkN.', NULL, '2025-11-05 07:57:16', '2025-11-10 21:12:37', NULL),
(67, 'Alvee', 'alvee@hashimukhbd.com', '01927763865', 'photos/epbQ2HYcgHi96iUc6iHDkzRa1N1BsUe1AchSVlGB.jpg', '2019-11-04', NULL, NULL, NULL, 'male', 23.74136180, 90.39204610, 'P9RR+JR7, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$EaSaxAloB2UQUUzspAioiOjaMzl1QzpUQcdxFwntFdFiAkRxF5goW', NULL, '2025-11-05 08:02:51', '2025-11-10 21:12:37', NULL),
(68, 'Hujaifa', 'hujaifaz@hashimukhbd.com', '01339552193', 'photos/nGRVEQ5gYsY05abIZMGhgCkN0oM5hFB81VwxCeWJ.jpg', '2021-08-10', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$D1eV9xq7NAjPc/SD/whjZ.xEAekTmHudj2FEGM5uSyDkQPJdLBq8y', NULL, '2025-11-05 08:07:02', '2025-11-10 21:12:37', NULL),
(69, 'Jakiya', 'jakiya@hashimukhbd.com', '01686060363', 'photos/dJLiaupbp7tlVk95EfkeCLTwsz7S4YC7KWtFEWZ8.jpg', '2021-11-10', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$3kC5BxcWc8btKysbNzBKr.LlfbmQntfAo8L4yo9ZOUjbo7QB9lOwa', NULL, '2025-11-05 08:12:10', '2025-11-10 21:12:37', NULL),
(70, 'Moriom', 'morio@hashimukhbd.com', '01785829722', 'photos/IbUfAERlNLxLH2wkbitFpOxXE2BKEACqiJmVMalJ.jpg', '2015-08-09', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$2McuZDBSc9lxy7hiGLPopeFrz4AE/cK2yPAa4K8B/IDTlDieg56Bi', NULL, '2025-11-05 08:20:39', '2025-11-10 21:12:37', NULL),
(71, 'Tanvir', 'tanvir@hashimukhbd.com', '01322412933', 'photos/cJCDr5P19zdr9scVJigjlJM1nurmmJMdzSyy5d0y.jpg', '2016-08-09', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$3wnnZTlBJZsnQPuV1FZi9up4Bm5vCpRu/uuhfgdee4raRk7UJnXae', NULL, '2025-11-05 08:24:28', '2025-11-10 21:12:37', NULL),
(72, 'Abdullah', 'abdullah@hashimukhbd.com', '01710353936', 'photos/Mm0T4BDK7DcmXSU7T3N1AKgdBOhFAKrkmVEvfx6y.jpg', '2016-11-09', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$FBQ9WFseVpTfKH2tO/fZoebd1kJns3Jju8jW89h4KtIsTxheXIiJK', NULL, '2025-11-05 08:28:55', '2025-11-10 21:12:37', NULL),
(73, 'Siyam', 'siyam@hashimukhbd.com', '01314629716', 'photos/jcgRtaWEsX2hcTo7NtwOcK2iPUFNKr3U1bteAYPb.jpg', '2013-05-15', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$Tlq4QA07Rh5QVV37IYpbauT9.V7CMN/OAGFxxH9bxj6112tRLX0mK', NULL, '2025-11-05 08:33:43', '2025-11-10 21:12:37', NULL),
(74, 'Masum', 'masum@hashimukhbd.com', '01716775623', 'photos/rubRYY2Max3xbFwtcipQtYjMWiQncdDJKx9jNsLM.jpg', '2016-08-10', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$2X3hvVTkgWL6IxpJqm4nBeRDF9Qn/0Sy6wwedE30m0d2/m1BUHF5q', NULL, '2025-11-05 08:37:31', '2025-11-10 21:12:37', NULL),
(75, 'Shakila', 'sakila@hashimukhbd.com', '01324932522', 'photos/3ibYHhPUN0AuZ3Wh6b4DaRi49wMLCnCfYU8oESKq.jpg', '2015-04-14', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$JvpUu/pXk5xmJ97Om6jgU.IyjG3/Juuz8/4PWt4OnkOv6Umq1Rz6m', NULL, '2025-11-05 08:42:41', '2025-11-10 21:12:37', NULL),
(76, 'Riya', 'riyamoni@hashimukhbd.com', '01781854124', 'photos/McLRbY7GTjM7EzN9yi1bjR8DQT9AilD4khWwfwzc.jpg', '2016-01-16', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$5SrxQ4KY9xdcIaxbQy/fEu.lhWaW1by5CIDpkPYaHs6oOz8EIqT6S', NULL, '2025-11-10 10:22:17', '2025-11-10 21:12:37', NULL),
(77, 'Jhumur', 'jumur@hashimukubd.com', '01759209725', 'photos/LmoezxjNgoPzulv6vwtsHXFkTSe1n2DiLrwi5awS.jpg', '2015-10-09', NULL, NULL, NULL, 'female', 23.74136180, 90.39204610, 'P9RR+JR7, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$6FVke4sCXg4gDtnXKdx1V.2lP7..IjBIRABga.5zv/gO/fJajdfNu', NULL, '2025-11-10 10:27:54', '2025-11-10 21:12:37', NULL),
(78, 'Farhana', 'farhana@hashimukhbd.com', '01747728772', 'photos/6QfNlSVy8cjPxGhi33om2hPG5FgSywgLNk229XH2.jpg', '2016-10-10', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$rDFV2c4Bxja1zgcCJrGdTepu6uveSmmTUq6WB5GBMznYikP2gVaGa', NULL, '2025-11-10 10:31:47', '2025-11-10 21:12:37', NULL),
(79, 'Hafsa', 'hafsa@hashimukhbd.com', '01932281226', 'photos/yJitZbaIkDRYlyX9ehJLWUMXFWAS1miiWBLy12Fg.jpg', '2014-11-02', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$.yDKHqg9euwwSoaJYr4xgOXMD8y3Q674EBFntQZ.aWOk./z/2CILG', NULL, '2025-11-10 10:35:35', '2025-11-10 21:12:37', NULL),
(80, 'Jannat', 'jannat@hashimukhbd.com', '01884185924', 'photos/mhJ2eCqeKOjd9Opsd82VURb8NZLkdBQA48tzqgbc.jpg', '2015-03-03', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$xDXouOHQV7PTsBXXfVspX.wNipZSkNQJM0R6/WFcHfEGhyLakk1AC', NULL, '2025-11-10 10:39:49', '2025-11-10 21:12:37', NULL),
(81, 'Konika', 'konika@hashimukhbd.com', '01909302640', 'photos/5mx8WSBeZw925qz4mTbLRiYMQRQIT9rjAxTXxajz.jpg', '2015-06-15', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$/a0tIrzKgcjNrjMv07OFq.7B8gT.ququZXAv6S2EpSmpI2eyiuodW', NULL, '2025-11-10 10:43:32', '2025-11-10 21:12:37', NULL),
(82, 'Sakibul', 'sakibul@hashimukhbd.com', '01308496350', 'photos/nSNHK9EbsWWzc5GVjeOP8vlP3lyQG6JrDw5d5mK5.jpg', '2017-11-01', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$GJlCQRjFfZydLZfic9AXd.hZj0FkUtRa6kEeSuCGjiw059EJDKo0a', NULL, '2025-11-10 10:46:46', '2025-11-10 21:12:37', NULL),
(83, 'Nusaiba', 'nusaiba@hashimukhbd.com', '01857409845', 'photos/cbfJpvIINgshpWCaQ9YTQxloNY2IyN6kfCRiEipE.jpg', '2015-08-19', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$GpUYlIoL90mpY9UCQXUBu.6zjxoh.z9FuEZPOHu3gONmKYOG7I.OG', NULL, '2025-11-10 10:53:58', '2025-11-10 21:12:37', NULL),
(84, 'Misty', 'misty@hashimukhbd.com', '01406426282', 'photos/CE5xwgkWPSXoOHBNos6m8skZIU0cXMQLFBNiRR85.jpg', '2013-06-13', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$cEtPmfplh3weQUWyzWhQz.ci9XU.kd7Z8qysMiVigtwD1lKDZNg8G', NULL, '2025-11-10 11:00:01', '2025-11-10 21:12:37', NULL),
(85, 'Habiba', 'habiba@hashimukhbd.com', '01710550255', 'photos/jDeDSrvd8gIwsucscjhL4FMOAHpreU7rDIrM6fEB.jpg', '2015-03-02', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$.wRn4sNjVRFgGOkCtb/K7ehCpow/vE3KREUSDfYN2xmpS.s8VHnWq', NULL, '2025-11-10 11:03:55', '2025-11-10 21:12:37', NULL),
(86, 'Sanha', 'sanha@hashimukhbd.com', '01814455330', 'photos/XRDLRXc1Q1AkZdvqLzSZI4GOQrU0Smb9htZteq40.jpg', '2014-04-17', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$aRUZWWZAxFjMThpdUAFere1zcE9cbVCQw00WSbIStsHAx5MnOAQD.', NULL, '2025-11-10 11:07:01', '2025-11-10 21:12:37', NULL),
(87, 'Shurmita', 'surmita@hashimukhbd.com', '01775953765', 'photos/rOzs0gWVO8yDmPXQO8x3NUCqeeZcLIW7gOow6Gym.jpg', '2012-09-25', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$8qdBnbRwd6OM48/vEBBI9e8GQW8otc/gOmTsy7je9e1ge1rzRfuke', NULL, '2025-11-10 11:12:28', '2025-11-10 21:12:37', NULL),
(88, 'Mim', 'mim@hashimukhbd.com', '01941191239', 'photos/UIKWFDGWubmEkSFGYoPcvMBApKmIfb8LejHI3qSZ.jpg', '2011-10-05', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, '2025-11-10 21:12:37', '2025-11-10 21:12:37', '$2y$12$.2S5BbHaHgCwnM97loOYmOLh8C/6EefadnR0yvbxI02.W7weObgtG', NULL, '2025-11-10 11:16:06', '2025-11-10 21:12:37', NULL),
(89, 'Joba', 'joba@hashinukhbd.com', '01794674114', 'photos/mjQ44JnKsfPjXnLbYyGbKuKPrBUPh6cuKRk2d5jO.jpg', '2019-06-17', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$1cVSqcWzX5uL4yGBdgdGlOoAP2LYOV4O7Vx0cGJ8h9cz8dlCcQw6q', NULL, '2025-11-11 07:17:48', '2025-11-11 07:17:48', NULL),
(90, 'Maisa', 'maisa@hashimukhbd.com', '01306687477', 'photos/CF4C7tuHVSKUqXAJgQm8eMyvQlyw1pFwUuBwSnyl.jpg', '2020-11-12', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$EKGp6/il5Ed46ohSfnYrDOOyq0M9hGNq9IhZBiu8vi4IO.3SmNVhy', NULL, '2025-11-11 07:21:42', '2025-11-11 07:21:42', NULL),
(91, 'Jannat', 'janat@hashimukhbd.com', '01615792719', 'photos/rVPcXvt8L8Fo01oA7wgUQ1RMcDsMNdsXN20KDCeS.jpg', '2020-11-07', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$EALzqwQrRIAIy8N8nwJ5MesWSzuh5enmEPl2GoZ2BxzX8DTfBEjxm', NULL, '2025-11-11 07:26:48', '2025-11-11 07:26:48', NULL),
(92, 'Muhima', 'muhima@hashimukhbd.com', '01325258485', 'photos/UtXNurZ4BaBrr2Ug6aMNEiLSDcjsRtbFnXovSC0H.jpg', '2018-11-06', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$CTsPkC/psucC39LXHOB5iuxPmMpUrox3cvOa7JorjJSO4nNrQBo4y', NULL, '2025-11-11 07:36:50', '2025-11-11 07:36:50', NULL),
(93, 'Mustakim', 'mustakim@hashimukhbd.com', '01326241902', 'photos/xgjxDc4rrafsuOgi7eUhipbuaprXpHaldCfHabk4.jpg', '2018-11-06', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$xC2VQiB9gelVOJPB2NfZQuSh7sF7Xcv3I1EUj5wxKKDWhjRW6NzFS', NULL, '2025-11-11 07:40:38', '2025-11-11 07:40:38', NULL),
(94, 'Habib', 'habib@hashimukhbd.com', '01776378874', 'photos/p6yIwUMNIHT18W6UuD7pyBMk9OWmpZc8UtOGk062.jpg', '2020-09-30', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$T3IEvIs7Qm9CdAsu4x.DKOccnMsNu3ojNTIysXYWjdLCkHI/wPyAW', NULL, '2025-11-11 07:43:48', '2025-11-11 07:43:48', NULL),
(95, 'Sahin', 'shahin@hashimukhbd.com', '01792185746', 'photos/qZ4wef0LEla688ihHWoz1BljDe0OGCYFHIdOkcJq.jpg', '2016-11-06', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$jO8piG1HbswP5.wgbGtYMu7xQuRN9FP35gcjsmfhl6i1lSr71yH0O', NULL, '2025-11-11 07:58:27', '2025-11-11 07:58:27', NULL),
(96, 'Arifa', 'arifa@hashimukhbd.com', '01784057145', 'photos/xOiXU3AZ651VDXNr3xI5XCYYYs1Lls055JXNzEhe.jpg', '2015-12-22', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Q62trh8ekK02dxJfEChjTexjbcxF37rzMI9YVTSs4Rx1G35ZyT/vW', NULL, '2025-11-11 08:07:13', '2025-11-11 08:07:13', NULL),
(97, 'Faria', 'faria@hashimukhbd.com', '01717363574', 'photos/4pWxLiBPSXeXOUksLZYR3RJ9Wgz12s9pcwvnbWOT.jpg', '2016-11-12', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Unw43uKBAIbo4MZBfWUlje6scCDDi7bJmRP7Nk0fpRKGHn9nXWbyG', NULL, '2025-11-11 08:09:48', '2025-11-11 08:11:21', NULL),
(98, 'Jarif', 'jarif@hashimukhbd.com', '01619576189', 'photos/l9XKLToPZAMCI7OPm3GC7aqpPxhwYUyXajStA9Ks.jpg', '2015-02-18', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$xnvk4AErIZti5vrSv0BwLO/S/OB6pBYFLM3v847ArzHiEOVVhO896', NULL, '2025-11-11 08:14:58', '2025-11-11 08:14:58', NULL),
(99, 'Mabia', 'mabia@hashimukhbd.com', '01986610728', 'photos/ybCyEpvxVTeuQCgDQ8UfBQaeOnmnZf0RtGfOW8PJ.jpg', '2017-05-03', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$WrHMEFXnyWaacsuXepEFReYGBu1tf.g2Z45aoEFwShpj20XN7Em1.', NULL, '2025-11-11 08:24:21', '2025-11-11 08:24:21', NULL),
(100, 'Fatema', 'fatama@hasimukhbd.com', '01345100944', 'photos/RttqWd2mzfISluwoBD2uL6PsSFNqtT2KFn82jSEz.jpg', '2019-11-20', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$2nm2JN/1WA3a4fmUN1aODeW4UEdQ9y7Q1R3RroSnqH9aPAWDjtMuW', NULL, '2025-11-11 08:28:37', '2025-11-11 08:28:37', NULL),
(101, 'Adil', 'adil@hashimukhbd.com', '01928599265', 'photos/9CDrea3P41oLMdA1gZMFCI7XhRjX43ruGDd5Tcts.jpg', '2019-11-05', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$0hK0IGvgKTONoRur2kI5GOtdqSvT8yP6s9wX16L/qWcGMWdxjzrdq', NULL, '2025-11-11 08:33:10', '2025-11-11 08:33:10', NULL),
(102, 'Sadman', 'sadman@hashimukhbd.com', '01925657351', 'photos/wjtSuHGZy27U5sP42KzmKkOzauCgaE0tL4F4RK1e.jpg', '2017-10-31', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Fd5ICiQqzZuEDXRxmJhVieO0Wx8OgLp5u0wkg9uZDSj/2rzHbtVza', NULL, '2025-11-11 08:38:26', '2025-11-11 08:38:26', NULL),
(103, 'Bayejid', 'bayejid@hashimukhbd.com', '01780895969', 'photos/FA7oTPNchlgZEYj8UgroC8yCiQDrrQWCwcdvDcOH.jpg', '2017-10-30', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Wu/XSMWhZp2G9qLTK9xOteuBJj6BwoHYyf2WdxWlhnYxe6Mpdtg0S', NULL, '2025-11-11 08:42:05', '2025-11-11 08:42:05', NULL),
(104, 'Shohana', 'sohana@hashimukhbd.com', '01607015550', 'photos/R1wAWLSkgdJKEgFuMc6buRcTV8bAA6PTiXPFD3ZX.jpg', '2015-11-08', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$GS7cXNWY584WfvDq9GA6huJp4.runpCxBOlW9/6hFMPiT5uobc4pa', NULL, '2025-11-11 08:46:12', '2025-11-11 08:46:12', NULL),
(105, 'Adiba', 'adiba@hashimukhbd.com', '01989063853', 'photos/KbI1QKq1dPzDLV1djRsF5irjJoKx6AphF016aLRH.jpg', '2016-02-08', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$46BSAeFUKNDlOqCpPsIT3umxoSCPWey64bk5lL5J9jQmqJMeg6e.S', NULL, '2025-11-11 08:54:53', '2025-11-11 08:54:53', NULL),
(106, 'Junaid', 'junaid@hashimukhbd.com', '01878481286', 'photos/hmrgbHEPdSKorL5Fgw9UPeb393HUttTAGwFrTjnh.jpg', '2015-07-19', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$MHAzStbbRYnvcBGVfFstxeBEkkxmshMyh71WAsaPTADv04AXDTqNC', NULL, '2025-11-11 08:59:11', '2025-11-11 08:59:11', NULL),
(107, 'Bipasha', 'bipasha@hashimukhbd.com', '01792874019', 'photos/NHQ9O07vgAeu9Em9jLG4VDCXt4Q5Id63PyMbVCge.jpg', '2017-05-30', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$hvzAYZouy2cpva3SSQyL4ego/bLlqHA6MfqxGWzDanHcbBjdju7Ru', NULL, '2025-11-11 09:04:52', '2025-11-11 09:04:52', NULL),
(108, 'Farjana', 'farjana@hashimukhbd.com', '01300119566', 'photos/680F3is6gnhYJwjXC4HCTcpcLIIZnlJpVhmZLqc9.jpg', '2015-06-07', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$NbeZnoBFOmtLymW8hM5al.i4lf1aqVobGECDrI6Rxjn5BKsOruDb2', NULL, '2025-11-11 09:14:17', '2025-11-11 09:14:17', NULL),
(109, 'Shahinur', 'shahinur@hashimukhbd.com', '01786435542', 'photos/89Pw82O3HkcqZ6gPHecQPIdUbWEOkZ9clqGRVagy.jpg', '2015-02-16', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$kLnCz1FPKyFIp80i9v90NeIGX1NNQIUunSCGopYxce2IRoNhG6HHW', NULL, '2025-11-11 09:17:28', '2025-11-11 09:17:28', NULL),
(110, 'Raisa', 'raisa@hashimukhbd.com', '01748477471', 'photos/nUy02XvUR2DknYaN1fFpsicvXpnkfpoQQtz9qr4d.jpg', '2017-04-24', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$PEkb81FCf6XF/EFYUTFkeOOG/2O1nisXjk7KXouiC.Q1jFmwXyUt2', NULL, '2025-11-11 09:20:05', '2025-11-11 09:20:05', NULL),
(111, 'Rifat', 'rifat@hashimukhbd.com', '01733753701', 'photos/5tvsQQd1pJdrWeDuXtYBbW6u1ELHyD7vR7iWp04j.jpg', '2014-03-15', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$FmckZlV8B/oRrOu1qlINIeOPN/lBA5bjAtAhdps19g52ncS7NQ0oe', NULL, '2025-11-11 09:25:56', '2025-11-11 09:25:56', NULL),
(112, 'Sarmin', 'sarmin@hashimukhbd.com', '01892571452', 'photos/krziakpW7PfLp1BhivFI0wrAhpbinlpwYZLIeHVO.jpg', '2015-10-14', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$zwdVpx//OGNK1VdJ6Q.eOuIkAoQYm1DohfLM/UtDjFXIz1CR7utDu', NULL, '2025-11-11 09:30:16', '2025-11-11 09:30:16', NULL),
(113, 'Afroja', 'afroja@hashiukhbd.com', '01302269694', 'photos/KcTNGPjaiWFl1AqfNPMirHS5aBNCmow5nZT9vtdX.jpg', '2019-08-14', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$ge.ysrMJGCKh6ILtWatYau3WfE9apeBETuSFpghRjZJ5pks8e8VLG', NULL, '2025-11-11 09:35:22', '2025-11-11 09:35:22', NULL),
(114, 'Yasin', 'yeasin@hashimukhbd.com', '01775963233', 'photos/zU8Q0Wih531SZZOKehnWsq0Bn4s5SQJJxSs3bcW8.jpg', '2016-06-07', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$ao2JAzMGQcmJgvqaoYwjo.VI06pf2qGngNSNbWAZro9h9g5TXOGe.', NULL, '2025-11-11 10:26:59', '2025-11-11 10:26:59', NULL),
(115, 'Hassan', 'hassan@hashimukhbd.com', '01725594609', 'photos/eVEfG4CaGRiVpRpf6Z1IQconWhlNOAj4Kh7F5eRI.jpg', '2015-06-16', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$I6XzbbxtAxgONbOXdNU05.FQy.qBod3t/.87TejRMB2s5AVbk5dHa', NULL, '2025-11-11 10:30:07', '2025-11-11 10:30:07', NULL),
(116, 'Saba', 'saba@hashimukhbd.com', '01818171652', 'photos/2v2ljvzGfXh1epCKmqgWQI7Dnpuz7HuIeHpbGkHY.jpg', '2018-11-05', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$bIZ5wbkSJ1e907tjpAHlZ.0YmjziZ725TJe..GMLaDdHTzb0IOJM2', NULL, '2025-11-11 10:35:09', '2025-11-11 10:35:09', NULL),
(117, 'Mahia', 'maiha@hashimukhbd.com', '01956932229', 'photos/5ErKQICNnQEyKCyOlfe12HeN58Awf03rXDwFgHJ0.jpg', '2017-07-18', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$HBFGlTf1OehUrLVio3xMW.LNbe0ihPxmaZK7AzAb12IoPuE8lcQh.', NULL, '2025-11-11 10:39:19', '2025-11-11 10:39:19', NULL),
(118, 'Srabonti', 'srabonti@hashimukhbd.com', '01770204055', 'photos/zoDzUrYdv4QjXkUkTSb2xK3pLHklTTGfDcEY1MCM.jpg', '2014-06-27', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Ybr3KcWP8Q/Kp/CxaS3oZ.lQDb9.nkg1LuyX30W0MbxlFAAtNVLQe', NULL, '2025-11-11 10:42:31', '2025-11-11 10:42:31', NULL),
(119, 'Shawon', 'shawon@hashimukhbd.com', '01687801030', 'photos/HtQIFl6fQcuMdvcLZoFuf4wBvACyRzikkMj7utbX.jpg', '2014-04-02', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$T0NMegMCcq4D21l7GLrTm.YxZJemR7cldzkHv.X6stKUYx5euQfje', NULL, '2025-11-11 10:47:08', '2025-11-11 10:47:08', NULL),
(120, 'Marof', 'marof@hashimukhbd.com', '01600148411', 'photos/ScIx2IyO9tHZA2pBTscjCI0z997ukrv2oa5Wovce.jpg', '2013-02-03', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$XVazZtPYoBeDzUv4LOTbOexwhoh9enXyQp8/Mb0Hv1g/HodpNTDMm', NULL, '2025-11-11 10:52:58', '2025-11-11 10:52:58', NULL),
(121, 'Osman', 'osman@hashimukhbd.com', '01618864099', 'photos/siQ5yLb9cZwZ7FpL3qIYryddsSn1LF7Euc2LC8fq.jpg', '2016-07-26', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$y1DarfjgTXgslOGfzhvLUOWeum8.k7l15T28L9YfLMgpjBvh4dOOq', NULL, '2025-11-11 10:55:53', '2025-11-11 10:55:53', NULL),
(122, 'Moriom', 'mariam@hashimukhbd.com', '01762735513', 'photos/6kcrS2jjCx15l9b4uuUsLqmYdNvS2RNvRU9riRlN.jpg', '2017-08-17', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$3vQo34gdgtQeWvVlP5PMgOwevETwaiPPGMJGTm0uvseGMYT02GRVe', NULL, '2025-11-11 11:00:29', '2025-11-11 11:00:29', NULL),
(123, 'Israt', 'israt@hashimukhbd.com', '01325558326', 'photos/eD5xUGxAyZqLbgVVVU9Rs4VcfWl2QrC4wtEyfsCt.jpg', '2016-06-06', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$ujb121vy17F5dqhWfpSx4.UtaZUy43Iy0PdiOTDyYMCWpybxjRAIe', NULL, '2025-11-11 11:03:03', '2025-11-11 11:03:03', NULL),
(124, 'Jihad', 'jehad@hashimukhbd.com', '01880208214', 'photos/TIbWz6hCccI8nNEWoYldZepxzcjg7UsAs7c0VuFP.jpg', '2013-11-13', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$z7B9lXCu4qJEeolepD7QyOcdN.yNWYEw8zBlXNqObPpnHsfH2xu8q', NULL, '2025-11-11 11:11:36', '2025-11-11 11:11:36', NULL),
(125, 'Abdur Rahman', 'rahman@hashimukhbd.com', '01735297171', 'photos/Qo8leNxO4npCTpirjcJ8oSFTiXR7aH9xzmlSrFUP.jpg', '2018-11-04', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$6lXY6D5XX8y8k/EmnrdUV.OhE65cqeHuq6D86E08Y2q0fWwjxBFRK', NULL, '2025-11-11 11:15:37', '2025-11-11 11:15:37', NULL),
(126, 'Yeasin', 'yeasen@hashimukhbd.com', '01718668723', 'photos/WG8z6kHDd2MoNmgWLHUb75FcckjWgYGeEY9MRuxs.jpg', '2020-05-20', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$peYOAWG6rZNZ9osVbaPhnuh6n7MFEXjaBJhUYMYk5ctg4J3ZbV.zK', NULL, '2025-11-11 11:18:30', '2025-11-11 11:18:30', NULL),
(127, 'Nusrat', 'nusrat@hashimukhbd.com', '01829670960', 'photos/3YCpk622GvUfQ2xFWixs1rVaSrMMi8eqUcw5XDTa.jpg', '2019-04-02', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$rf5N1b9rF42EWLCDd/X6juHeyq6jw4ILgQgeW1Z1CZLrn7tfAJL1m', NULL, '2025-11-11 11:20:51', '2025-11-11 11:20:51', NULL),
(128, 'Sifat', 'sefat@hasinukhbd.com', '01715809688', 'photos/XSCpf0g4v3pxdppQFzYsQR2MgPnj2Y2LGoNGBJxC.jpg', '2019-06-13', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$yaIljiw9jLWk1d87MUnuue/1BUmo3gCZbEyzMwX9kMzUa.zUO3NtK', NULL, '2025-11-11 11:23:41', '2025-11-11 11:23:41', NULL),
(129, 'Sarmin', 'sarmen@hashimukhbd.com', '01906981928', 'photos/YgWt4q5Y3lvpQfh0CcSCncruz0Zw5kZ9mvAuNgc9.jpg', '2013-05-07', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$hlkG29IIHXpqpelFQSL..uuRTM1Z.YFqOhCa1aFZtUcCx44KMVhcG', NULL, '2025-11-11 11:31:36', '2025-11-11 11:31:36', NULL),
(130, 'Fatema', 'fathema@hashimukhbd.com', '01884113262', 'photos/w8ocWP3D0H9bkRfj5RhcC9Q5cMfDtn858SClMs7c.jpg', '2015-05-12', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$cihu.BGq4T68t6tJFAY8mueuLD7LpNSd5wTgSL2seFqGvwaLDcjcq', NULL, '2025-11-11 11:34:49', '2025-11-11 11:34:49', NULL),
(131, 'Alamin', 'amin@hashimukhbd.com', '01700642214', 'photos/21PPKYww8u5HK851Kj8va0ylBG2DQSCwxzXAKiMp.jpg', '2011-12-15', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$3nF9CL9i1iouErGOGOAFberhexrvehog8.ENmlPvXRooE.IZGaehO', NULL, '2025-11-11 11:39:06', '2025-11-11 11:39:06', NULL),
(132, 'Mohon', 'mohon@hshimukhbd.com', '01753150678', 'photos/XQCI9k9S5ONERnpbNa8VRftV5lrjgowoktqWkUDB.jpg', '2015-04-11', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$SoGmvNapvSG9PYUUsOseU.tGXC793wxfSJAVun7NHjFpee1fV53Rq', NULL, '2025-11-12 07:36:06', '2025-11-12 07:36:06', NULL),
(133, 'Romjan', 'romjan@hashimukhbd.com', '01736681611', 'photos/S8vqWMG17HEdfGqph0PY5x6nzRoyPgA7dD0lfMhN.jpg', '2019-08-08', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$497hkuyWAE0miLCSHCVJMe0BqAKeM2JDp3SZbt4wlawYjatJT1FW.', NULL, '2025-11-12 07:54:56', '2025-11-12 07:54:56', NULL),
(134, 'Raesa', 'raesa@hashimukhubd.com', '01922795510', 'photos/J7BuIZONL4AxDsbUZS0ndFS38EqjvfmF4Irc97Dq.jpg', '2019-07-15', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$ibxw373caq8v01ITPjV2OOYKxk/HEiN2w0prs510585Ie5wzRUDAy', NULL, '2025-11-12 08:00:06', '2025-11-12 08:00:06', NULL),
(135, 'Shahadat', 'shahadat@hasimukhbd.com', '01381769888', 'photos/GsVgVBoKtFtOAenm1aMJLtRVwlmAGHNMddskZ21X.jpg', '2019-10-27', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$e12vc/kHIWy5JUJsaMiOFuWMrJ3K9MsZqj8ukXWLuzEasApS15d42', NULL, '2025-11-12 08:05:10', '2025-11-12 08:05:10', NULL);
INSERT INTO `users` (`id`, `name`, `email`, `phone`, `image`, `dob`, `guardian_name`, `guardian_phone`, `relationship`, `gender`, `latitude`, `longitude`, `address`, `is_verified`, `is_active`, `email_verified_at`, `phone_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(136, 'Jim', 'jim@hashimukhbd.com', '01777516044', 'photos/CU1z9wk70InJfXPIVytvf4px77h1qcJ3vpkwsxDA.jpg', '2019-11-20', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$eRmrajrBCqG1NGSxkGruXekZ2fOQyy1mcaxSXjtPSraHkSXnY3mVu', NULL, '2025-11-12 08:10:17', '2025-11-12 08:10:17', NULL),
(137, 'Rabbi', 'rabbi@hashimukhbd.com', '01732196329', 'photos/AM4l3fttGKbAxCc5F6MneTPxfJlrQtn6hIxT3ZQv.jpg', '2021-09-18', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$JK/RQ.mCwtimWWcqwrWHO.d9pO3KlnmuGxZfuAk.EBnIdF4IAWrVm', NULL, '2025-11-12 08:17:13', '2025-11-12 08:17:13', NULL),
(138, 'Arafat', 'araffat@hashimukhbd.com', '01752601985', 'photos/iWscTwCW2r42tL9EaTlWRle22IiPHfcpgisTViIZ.jpg', '2014-02-01', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$1lpLVg/O8RKttC1ZLhTcn.IrWA7ktNaCcST3P5krAGPbX5wm18eE.', NULL, '2025-11-12 08:22:04', '2025-11-12 08:22:04', NULL),
(139, 'Laboni', 'laboni@hashimukhbd.com', '01701956068', 'photos/XliNF3VqRPXqgL3Lvcy8r6rhrnISupOIcowFpbJT.jpg', '2014-07-14', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$k3u15O9btZ7PGOQAqaNjd.fF4EhFxMPUlJt04u8lCliJ064ejvLG6', NULL, '2025-11-12 09:46:38', '2025-11-12 09:46:38', NULL),
(140, 'Forid', 'forid@hashimukhbd.com', '01726454457', 'photos/1763279237.jpg', '2017-07-11', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Qs/eLzQ0.jhvbW7l9n4/E.Aes4tCU2BM8X2EIwePS4e5Vddlhd4Vu', NULL, '2025-11-16 07:47:17', '2025-11-16 07:47:17', NULL),
(141, 'Juhaira', 'juhaira@hashimukhbd.com', '01761756281', 'photos/1763279433.jpg', '2021-01-19', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$DJZg9KbXI.Ka0k.rR39c4O1Z8/c59iXHklFGiFeLBfefQ9i6ygByq', NULL, '2025-11-16 07:50:34', '2025-11-16 07:50:34', NULL),
(142, 'Snheha', 'sneha@hashimukhbd.com', '01703092687', 'photos/1763282348.jpg', '2014-11-04', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$ETmt8ZiFojzYAdQdwoisE.hl.Pog/IHuOZ5VuFyDR9pCJprbiuNZO', NULL, '2025-11-16 08:39:09', '2025-11-16 08:39:09', NULL),
(143, 'Emon', 'emon@hashimukhbd.com', '01748199638', 'photos/1763463523.jpg', '2017-06-15', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Lc61hA9J9.Y1ZUHmhr6GcuyDiKDMAjkg4/XHVQRu6ODDfzeIyGcfa', NULL, '2025-11-18 10:58:43', '2025-11-18 10:58:43', NULL),
(144, 'Shifat', 'shifat@hashimukhbd.com', '01810905448', 'photos/1763463721.jpg', '2017-04-03', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$4PEpxWtDKEOKQPNuZy/fKuaS4/8lTFWiotddAhY22oBW0Io1FJJ1a', NULL, '2025-11-18 11:02:01', '2025-11-18 11:02:01', NULL),
(145, 'Fahad', 'fahad@hashimukhbd.com', '01777656938', 'photos/1763463861.jpg', '2015-06-16', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$W6TF3ITFpuShdWqJ19niF.SW6ZalI.al2cMLXSPo5zmqdTy3p6HWW', NULL, '2025-11-18 11:04:22', '2025-11-18 11:04:22', NULL),
(146, 'Romjan', 'roujan@hashimukhbd.com', '01754938539', 'photos/1763464061.jpg', '2012-11-04', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$v6DlcN2OTeZqe/P1b2tRce2Fa0BTYGYu2Nowpo/u3ZXpjBmLSfqii', NULL, '2025-11-18 11:07:41', '2025-11-18 11:07:41', NULL),
(147, 'Imon', 'imon@hashimukhbd.com', '01999327254', 'photos/1763464289.jpg', '2011-03-29', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$HctVdYD5OIOC55u7tg5V6OqS8XnxqifCc/ZtqIYuWWtFlWYigQ0.6', NULL, '2025-11-18 11:11:29', '2025-11-18 11:11:29', NULL),
(148, 'Awal', 'awal@hashimukhbd.com', '01744411213', 'photos/1763464445.jpg', '2015-06-09', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Hjtapl.xPSJNNRfLURhK7eRDUH2rjJjh5IZJFxoP.V.6Ft8ZcnSyK', NULL, '2025-11-18 11:14:05', '2025-11-18 11:14:05', NULL),
(149, 'Tanvir', 'tanver@hashimukhbd.com', '01330942530', 'photos/1763464758.jpg', '2022-03-30', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$drJATc.ypsBuaB65IcUUwu990./bnFk3PEmFJVsDwI9nUDxlVS2gG', NULL, '2025-11-18 11:19:18', '2025-11-18 11:19:18', NULL),
(150, 'Robiul', 'robiul@hashimukhbd.com', '01946190047', 'photos/1763465711.jpg', '2011-04-05', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$dEfUVQVesf/voW5eRNaRku36hbAaeFqoDt8PVw5.gvZq1Vsb0fX0e', NULL, '2025-11-18 11:35:12', '2025-11-18 11:35:12', NULL),
(151, 'Md Nur A Alam Chowdhury', 'chowdhury.nur.7234@gmail.com', '01717099992', NULL, '2000-08-29', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Bt32KYNSo9yu2W3HyfEoOej4w.84oVnvGOAlGAPVx/Ipcm2qup/1K', NULL, '2025-11-19 05:47:07', '2025-11-19 05:47:07', NULL),
(152, 'Marufa', 'marufa@hashimukhbd.com', '01793358229', 'photos/1763896399.jpg', '2012-11-06', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$GTfKmGYat29eOSkzsyhjEeoDLU8g9H4a6EknXlejZy5p6kUd/YQN2', NULL, '2025-11-23 11:13:20', '2025-11-23 11:13:20', NULL),
(153, 'Jannatul', 'jannatul@haahimukhbd.com', '01727289658', 'photos/1763896651.jpg', '2015-05-11', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$0THd0La0m8mj.mGaNGqGq.bHbl3lXyCIyg2Yb.Ay8LE.flVFP.SjW', NULL, '2025-11-23 11:17:32', '2025-11-23 11:17:32', NULL),
(154, 'Nosrat', 'nosrat@hashimukhbd.com', '01725127041', 'photos/1763896930.jpg', '2018-06-06', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$IcVNL2VyO4928P5qzHzUAep0e0QhCK52dHOU7KQfECE4kUMHKvZNm', NULL, '2025-11-23 11:22:11', '2025-11-23 11:22:11', NULL),
(155, 'Ohi', 'ohi@hashimukhbd.com', '01791717088', 'photos/1763897165.jpg', '2019-05-07', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$izH/Cqm.Q/22Tx02xKyGVuTYtdfri4giRlhSmGcJNkM3BSAYv2YHC', NULL, '2025-11-23 11:26:06', '2025-11-23 11:26:06', NULL),
(156, 'Nahida', 'nahida@hashimukhbd.com', '01941308132', 'photos/1763897339.jpg', '2014-03-30', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$rcTDLVV59ctqNjYNnTcQDOMQaX4Sqd436L3g/Oxg5rSUxlW7dQQWG', NULL, '2025-11-23 11:28:59', '2025-11-23 11:28:59', NULL),
(157, 'Meem', 'meem@hashimukhbd.com', '01929462448', 'photos/1763897504.jpg', '2013-05-12', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$kMbEN24NSuMrilPPd8url.XwOO5.VMtj3YtgsjMdi0wQHRI6AYUhe', NULL, '2025-11-23 11:31:45', '2025-11-23 11:31:45', NULL),
(158, 'Reya', 'reya@hashimukhbd.com', '01972661531', 'photos/1763897653.jpg', '2015-11-24', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$a.myieqKNXWrT3uLeIMF2.nW3lvbDDDecgMPKI6uGfS8B.XK6f4uK', NULL, '2025-11-23 11:34:14', '2025-11-23 11:34:14', NULL),
(159, 'Alef', 'alef@hashimukhbd.com', '01865545210', 'photos/1763897831.jpg', '2013-04-02', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$dNuwwsTYHvjvN4EYDS3LV.b30EMKuf4l2aFMtQcDTynzZNtxikROm', NULL, '2025-11-23 11:37:11', '2025-11-23 11:37:11', NULL),
(160, 'Lamiya', 'lamiya@hashimukhbd.com', '01774792799', 'photos/1763898024.jpg', '2012-10-08', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$la.ORnzs5fgERD83J41cNOOObvrQSaNMOcGlsJ.3mJiUm1PnGdwkW', NULL, '2025-11-23 11:40:24', '2025-11-23 11:40:24', NULL),
(161, 'Fizz', 'fizz@hashimukhbd.com', '01727211180', 'photos/1764136274.jpg', '2013-06-18', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$BG2Lbv7lsZlTUy8Ij5hl1OfsnFBgnhibfLIzIqfbU.CaIPKSI0PWu', NULL, '2025-11-26 05:51:15', '2025-11-26 05:51:15', NULL),
(162, 'Qaium', 'qaikum@hashimukhbd.com', '01756578555', 'photos/1764140770.jpg', '2019-09-10', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$1N5WltXgb7iIPDgF/rOlDuEQWE/UqIJ.1FnA6crYljcFpgBmiLpdS', NULL, '2025-11-26 07:06:11', '2025-11-26 07:06:11', NULL),
(163, 'Mim akhter', 'mimakhter@hashimukhbd.com', '01402057188', 'photos/1764142053.jpg', '2011-03-16', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$hvXj0IDK4usno00xgrIf/emVUvALoSRUuBur0hqloouWP4gmyRWaC', NULL, '2025-11-26 07:27:33', '2025-11-26 07:27:33', NULL),
(164, 'Sarmin Akter', 'sharmin@hashimukhbd.com', '01792767455', 'photos/1764142100.jpg', '2012-11-05', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$wlV7/bhQa9bFKnnkGQkaGe42d8c0fTmlNE9V.NPO.YHX4MhBHoUBa', NULL, '2025-11-26 07:28:20', '2025-11-26 07:28:20', NULL),
(165, 'Tabassum tishamoni', 'tisha.hashimukhbd@gmail.com', '01704913411', 'photos/1764142154.jpg', '2020-10-25', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$sAiCDAvWOqhdQnKo2OHgy.sHL3gQRek3FffmdYwmyHhgCaW6FM/jK', NULL, '2025-11-26 07:29:15', '2025-11-26 07:29:15', NULL),
(166, 'Afrida', 'afrida@hashimukhbd.com', '01797455824', 'photos/1764142384.jpg', '2014-05-14', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$4MXdYjhGN1RZQZRhbwnGk.toIRnZDnRC427SFDMurbHlrPOxyKXwG', NULL, '2025-11-26 07:33:04', '2025-11-26 07:33:04', NULL),
(167, 'Fahim', 'fahim@hashimukhbd.com', '01300539211', 'photos/1764142510.jpg', '2018-05-08', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$D6AD3e93PnAROjxXG4aOdOhwtBniWp26KLDXBpsDbFl/ufpeDX4CS', NULL, '2025-11-26 07:35:10', '2025-11-26 07:35:10', NULL),
(168, 'Jui', 'jui.hashimukhbd@gmail.com', '01721053180', 'photos/1764142536.jpg', '2020-11-25', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$XbQF5yjpNtjlmXrSGXineeZlaRXbmZtH6Wcnb3qc5XvkizcCee2hq', NULL, '2025-11-26 07:35:36', '2025-11-26 07:35:36', NULL),
(169, 'Sufiyan', 'sufiyan@hashimukhbd.com', '01682980011', 'photos/1764142712.jpg', '2017-05-09', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$SN0vJj2j8UpQTaBTihz37eM58lbehyzcKTahhKtKo3hlv2Zaf47Gy', NULL, '2025-11-26 07:38:33', '2025-11-26 07:38:33', NULL),
(170, 'Bayzid Bostami', 'bayzid@hashimukhbd.com', '01337988052', 'photos/1764142953.jpg', '2019-02-04', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$LShOvhTd.tkCd/FyznekKOaGl8mHQT/fIB1yXjbAeIQf7qDOtO0y.', NULL, '2025-11-26 07:42:33', '2025-11-26 07:42:33', NULL),
(171, 'Nargis Akter', 'nargis.hashimukhbd@gmail.com', '01751337702', 'photos/1764143028.jpg', '2016-11-26', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$aRocfNRQ3KsbL0raG0KLGuEMQvZHNMGRCBftgXNbRY48liIWrlIVG', NULL, '2025-11-26 07:43:49', '2025-11-26 07:43:49', NULL),
(172, 'Iusrat Jahan Tania', 'jahan@hashimukhbd.com', '01617062024', 'photos/1764143318.jpg', '2009-05-04', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$SWzM3WGHO7mFpto8Oi0ATe.1GtfJYcwIddj3/1fomMtLrNHVdXObW', NULL, '2025-11-26 07:48:38', '2025-11-26 07:48:38', NULL),
(173, 'Rumpa', 'rumpa.hashimukhbd@gmail.com', '01308549671', 'photos/1764143435.jpg', '2010-12-31', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$mpAwcnHDZqXvxajHVhyNU.E4kd6/221OqWDqjZOItQ5hqjeS/pcnm', NULL, '2025-11-26 07:50:35', '2025-11-26 07:50:35', NULL),
(174, 'Afroza Akter Hashi', 'hashi@hashimukhbd.com', '01339363803', 'photos/1764143548.jpg', '2012-05-08', NULL, NULL, NULL, 'female', 25.74969030, 89.25787640, 'Central Rd, Rangpur, Bangladesh', 1, 1, NULL, NULL, '$2y$12$GjiRwySBCqGdALf56geBO.XEaETGnWgikPE33M90EzL5gRBl0DHC2', NULL, '2025-11-26 07:52:28', '2025-11-26 07:52:28', NULL),
(175, 'Md Shamim', 'shamim@hashimukhbd.com', '01964232112', 'photos/1764143807.jpg', '2007-09-09', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$h1vKCsw2/sv2kDrYHfOfYOjxDIzgqFlVoOyOH0yeDx58AjyZ8Ld4y', NULL, '2025-11-26 07:56:48', '2025-11-26 07:56:48', NULL),
(176, 'Amreen Akter', 'amreen@hashimukhbd.com', '01810525771', 'photos/1764144046.jpg', '2008-02-22', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$APzyq.oJl6OvUXNd.618cOZqg0h25Dz4kl8mkFQNx7QZeew2PvN.G', NULL, '2025-11-26 08:00:47', '2025-11-26 08:00:47', NULL),
(177, 'Kashfia Islam', 'kashfia.hashimukhbd@gmail.com', '01757088132', 'photos/1764144084.jpg', '2014-01-01', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$FAfrRLKvJa31ZAfx04L.KOKyHq4EE9iddJSEjru2/aJ0UTDipzwja', NULL, '2025-11-26 08:01:25', '2025-11-26 08:01:25', NULL),
(178, 'Habirul Islam', 'habirul@hashimukhbd.com', '01825148910', 'photos/1764144245.jpg', '2010-05-08', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$r03.cA9s1Rq4fmYiQdMwBuqXtGgOBvHWZPrhshpYPZQJMK7RK2eny', NULL, '2025-11-26 08:04:06', '2025-11-26 08:04:06', NULL),
(179, 'Shamim', 'samim@hashimukhbd.com', '01341237308', 'photos/1764144339.jpg', '2012-06-06', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$scxgb25gvxwzuXUXtKVT9.c916oAxJfJug2fJIpX2uaa28pQRskO.', NULL, '2025-11-26 08:05:40', '2025-11-26 08:05:40', NULL),
(180, 'Md Zihad Hasan Biplob', 'zihad@hashimukhbd.com', '01722205966', 'photos/1764145725.jpg', '2013-09-23', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Qqw8AkdTPmKuI9sdQ/0SxuCB4rgdC6nwoNxrq5oNAfLjUp5E5TbdO', NULL, '2025-11-26 08:28:46', '2025-11-26 08:28:46', NULL),
(181, 'Md. Mithun', 'mithun.hashimukhbd@gmail.com', '01749755801', 'photos/1764146203.jpg', '2012-11-22', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$Fv0omOqKieAogdavyKjqfupQI13fuw9QcJpC5X9OTGsoBFcrjTPbq', NULL, '2025-11-26 08:36:44', '2025-11-26 08:36:44', NULL),
(182, 'Ayrin', 'ayrin@hashimukhbd.com', '01718137919', 'photos/1764146492.jpg', '2021-05-10', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$JxjBH2uoCz0KQ9lVmEG/VOvjsfd7w8Gh8lyS0N1sfAnPL/iVIcXR6', NULL, '2025-11-26 08:41:32', '2025-11-26 08:41:32', NULL),
(183, 'Md. Shamim', 'shamim.hashimukhbd@gmail.com', '01343504609', NULL, '2014-02-11', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$mNGoxa3ZcXyF71ItU4FWjuexdVxufAD0DKd9Zmj4uBw4M1iL/WIiS', NULL, '2025-11-26 08:44:17', '2025-11-26 08:44:17', NULL),
(184, 'Aba', 'aba@hashimukhbd.com', '01726670195', 'photos/1764146668.jpg', '2021-05-05', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$UdBZLVKIL9Yo7Z2ndoRblekiYMgMHv236n82ud.sXJXlMmJc8yzHi', NULL, '2025-11-26 08:44:28', '2025-11-26 08:44:28', NULL),
(185, 'Jannatul', 'jannatul.hashimukhbd@gmail.com', '01301701542', 'photos/1764146972.jpg', '2015-11-09', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$710eRwmO8Cra.l5O/CZ8m.6lNNEm9fFtSQpScEL36Ap5gj3qDGC2S', NULL, '2025-11-26 08:49:32', '2025-11-26 08:49:32', NULL),
(186, 'Shapla', 'shapla.hashimukhbd@gmail.com', '01728882298', 'photos/1764147792.jpg', '2015-12-31', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$NQ2AjNHAhQzMoQofUXN1lu8rmHD4nAT3M7JRCyVYclG7M8rm9WfLK', NULL, '2025-11-26 09:03:12', '2025-11-26 09:03:12', NULL),
(187, 'Shathi', 'sathi@hashimukhbd.com', '01876758699', 'photos/1764147853.jpg', '2012-06-11', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$bSwWodSQQolYdBa29K1/huj65FNyjvlBQuhzPJGlZYt2PsDbpUVjC', NULL, '2025-11-26 09:04:14', '2025-11-26 09:04:14', NULL),
(188, 'Mursalin', 'mursalin@hashimukhbd.com', '01758193898', 'photos/1764148066.jpg', '2019-05-14', NULL, NULL, NULL, 'male', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$rJ7uVGVW7KJRy8lIHzYFIuXQ9kdI/U/DN7xzp.yA8lskwumRJVnFq', NULL, '2025-11-26 09:07:46', '2025-11-26 09:07:46', NULL),
(189, 'Ashamoni', 'ashamoni.hashimukhbd@gmail.com', '01798559638', 'photos/1764148221.jpg', '2018-02-28', NULL, NULL, NULL, 'female', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$AAXRXLLEuib1gx2HIDPwj.BTlZlKEojSHqhXqgtGKcukgCwcEide6', NULL, '2025-11-26 09:10:21', '2025-11-26 09:10:21', NULL),
(190, 'Ikra', 'ikra@hasimukhbd.com', '01741354296', 'photos/1764148606.jpg', '2021-11-16', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$bW7rDufI6A.hWPMxgo/QluiDBP9pGXb0z6/.s2t8hLp5q9ZuQZ7V2', NULL, '2025-11-26 09:16:47', '2025-11-26 09:16:47', NULL),
(191, 'Tahsin', 'tahsin.hashimukhbd@gmail.com', '01706574483', 'photos/1764148657.jpg', '2016-03-02', NULL, NULL, NULL, 'male', 23.74271610, 90.38837350, 'Hatirpool, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$j8UdBgDJGmzPLztVXED6ZuKJzDcJfNG1NEE1/LaTM.fPo.0PrjuAG', NULL, '2025-11-26 09:17:37', '2025-11-26 09:17:37', NULL),
(192, 'Taslim', 'taslim@hashimukhbd.com', '01319131993', 'photos/1764148889.jpg', '2016-04-12', NULL, NULL, NULL, 'female', 23.74189600, 90.38770890, 'Central Rd, Dhaka 1205, Bangladesh', 1, 1, NULL, NULL, '$2y$12$je9yTT6trJwh9zOrJLArwO1AJj9EukgAjciNpRmDnxfpjIhAIXxDC', NULL, '2025-11-26 09:21:30', '2025-11-26 09:21:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wishers`
--

CREATE TABLE `wishers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_phone` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` enum('male','female','other') NOT NULL DEFAULT 'male',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishers`
--

INSERT INTO `wishers` (`id`, `name`, `user_id`, `guardian_name`, `guardian_phone`, `relationship`, `dob`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Md Delowar Hossain', 23, 'Md Jonab ali khan', '01765230714', 'parent', '1996-11-06', 'male', '2025-10-10 15:21:10', '2025-10-10 15:21:10', NULL),
(2, 'Siratul muntaha raisa', 24, 'Foij Ahammad', '01797423387', 'uncle', '2014-09-09', 'female', '2025-10-10 15:24:45', '2025-10-10 15:24:45', NULL),
(3, 'Md. Sazzad Hossain Syeem', 25, NULL, NULL, NULL, '1993-11-17', 'male', '2025-10-12 04:31:24', '2025-10-12 04:31:24', NULL),
(4, 'Alamgir hussain', 26, NULL, NULL, NULL, '1997-11-27', 'male', '2025-10-12 11:14:02', '2025-10-12 11:14:02', NULL),
(5, 'Md.Firoz', 27, NULL, NULL, NULL, '1994-05-04', 'male', '2025-10-13 08:14:08', '2025-10-13 08:14:08', NULL),
(6, 'Jewel', 28, NULL, NULL, NULL, '1999-05-01', 'male', '2025-10-13 08:25:15', '2025-10-13 08:25:15', NULL),
(7, 'Ataul Iqbal Rubel', 29, NULL, NULL, NULL, '2022-10-06', 'male', '2025-10-13 08:26:32', '2025-10-13 08:26:32', NULL),
(8, 'Bijoy Saha', 30, NULL, NULL, NULL, '1997-08-01', 'male', '2025-10-13 08:33:20', '2025-10-13 08:33:20', NULL),
(9, 'Rafi Chowdhury', 32, NULL, NULL, NULL, '2000-08-29', 'male', '2025-10-16 07:53:39', '2025-10-16 07:53:39', NULL),
(10, 'Shawon', 34, NULL, NULL, NULL, '2015-12-31', 'male', '2025-10-27 12:30:57', '2025-10-27 12:30:57', NULL),
(11, 'hello', 35, NULL, NULL, NULL, '2025-10-02', 'other', '2025-10-28 11:53:32', '2025-10-28 11:53:32', NULL),
(12, 'ABC', 37, NULL, NULL, NULL, '2005-10-31', 'male', '2025-11-04 07:36:55', '2025-11-04 07:36:55', NULL),
(13, 'Shanto', 38, NULL, NULL, NULL, '2007-09-19', 'male', '2025-11-04 08:32:27', '2025-11-04 08:32:27', NULL),
(14, 'Khadija', 39, NULL, NULL, NULL, '2013-08-03', 'female', '2025-11-04 09:02:34', '2025-11-04 09:02:34', NULL),
(15, 'Alamin', 40, NULL, NULL, NULL, '2015-07-25', 'male', '2025-11-04 09:09:05', '2025-11-04 09:09:05', NULL),
(16, 'Imran', 41, NULL, NULL, NULL, '2016-12-11', 'male', '2025-11-04 09:15:27', '2025-11-04 09:15:27', NULL),
(17, 'Tajim', 42, NULL, NULL, NULL, '2017-03-01', 'male', '2025-11-04 09:20:43', '2025-11-04 09:20:43', NULL),
(18, 'Sujon', 43, NULL, NULL, NULL, '2012-11-19', 'male', '2025-11-04 09:25:38', '2025-11-04 09:25:38', NULL),
(19, 'Morsalin', 44, NULL, NULL, NULL, '2014-12-31', 'male', '2025-11-04 09:30:50', '2025-11-04 09:30:50', NULL),
(20, 'Hasmin', 45, NULL, NULL, NULL, '2013-02-21', 'male', '2025-11-04 09:40:01', '2025-11-04 09:40:01', NULL),
(21, 'Maruf', 46, NULL, NULL, NULL, '2017-07-21', 'male', '2025-11-04 09:44:26', '2025-11-04 09:44:26', NULL),
(22, 'Sahnaj', 47, NULL, NULL, NULL, '2012-12-31', 'female', '2025-11-04 09:49:44', '2025-11-04 09:49:44', NULL),
(23, 'Tisan', 48, NULL, NULL, NULL, '2010-07-18', 'male', '2025-11-04 09:54:26', '2025-11-04 09:54:26', NULL),
(24, 'Esan', 49, NULL, NULL, NULL, '2016-07-24', 'male', '2025-11-04 09:59:02', '2025-11-04 09:59:02', NULL),
(25, 'Sayem', 50, NULL, NULL, NULL, '2014-07-31', 'male', '2025-11-04 10:02:56', '2025-11-04 10:02:56', NULL),
(26, 'Raj', 51, NULL, NULL, NULL, '2014-12-16', 'male', '2025-11-04 10:07:46', '2025-11-04 10:07:46', NULL),
(27, 'Jihad', 52, NULL, NULL, NULL, '2014-05-31', 'male', '2025-11-04 10:11:16', '2025-11-04 10:11:16', NULL),
(28, 'Hasiba', 53, NULL, NULL, NULL, '2015-11-22', 'female', '2025-11-04 10:15:44', '2025-11-04 10:15:44', NULL),
(29, 'Liza', 54, NULL, NULL, NULL, '2015-11-02', 'female', '2025-11-04 10:21:30', '2025-11-04 10:21:30', NULL),
(30, 'Tasfiya', 55, NULL, NULL, NULL, '2015-10-15', 'female', '2025-11-04 10:25:03', '2025-11-04 10:25:03', NULL),
(31, 'Tahmina', 56, NULL, NULL, NULL, '2014-02-28', 'female', '2025-11-04 10:29:52', '2025-11-04 10:29:52', NULL),
(32, 'Shusmita', 57, NULL, NULL, NULL, '2014-11-15', 'female', '2025-11-04 10:32:42', '2025-11-04 10:32:42', NULL),
(33, 'Sifat', 58, NULL, NULL, NULL, '2015-05-31', 'male', '2025-11-04 10:36:37', '2025-11-04 10:36:37', NULL),
(34, 'Riyamoni', 59, NULL, NULL, NULL, '2013-07-17', 'female', '2025-11-04 10:40:53', '2025-11-04 10:40:53', NULL),
(35, 'Fatema', 60, NULL, NULL, NULL, '2015-01-12', 'female', '2025-11-04 10:57:16', '2025-11-04 10:57:16', NULL),
(36, 'Nupur', 61, NULL, NULL, NULL, '2012-10-04', 'female', '2025-11-04 11:00:18', '2025-11-04 11:00:18', NULL),
(37, 'Rohim', 62, NULL, NULL, NULL, '2017-08-27', 'male', '2025-11-04 11:06:28', '2025-11-04 11:06:28', NULL),
(38, 'Hafizul', 63, NULL, NULL, NULL, '2015-10-09', 'male', '2025-11-04 11:09:57', '2025-11-04 11:09:57', NULL),
(39, 'Sumaiya', 64, NULL, NULL, NULL, '2013-01-02', 'female', '2025-11-04 11:15:30', '2025-11-04 11:15:30', NULL),
(40, 'Naeim', 65, NULL, NULL, NULL, '2008-06-11', 'male', '2025-11-05 06:00:17', '2025-11-05 06:00:17', NULL),
(41, 'Safin', 66, NULL, NULL, NULL, '2019-01-27', 'male', '2025-11-05 07:57:16', '2025-11-05 07:57:16', NULL),
(42, 'Alvee', 67, NULL, NULL, NULL, '2019-11-04', 'male', '2025-11-05 08:02:51', '2025-11-05 08:02:51', NULL),
(43, 'Hujaifa', 68, NULL, NULL, NULL, '2021-08-10', 'male', '2025-11-05 08:07:02', '2025-11-05 08:07:02', NULL),
(44, 'Jakiya', 69, NULL, NULL, NULL, '2021-11-10', 'female', '2025-11-05 08:12:10', '2025-11-05 08:12:10', NULL),
(45, 'Moriom', 70, NULL, NULL, NULL, '2015-08-09', 'female', '2025-11-05 08:20:39', '2025-11-05 08:20:39', NULL),
(46, 'Tanvir', 71, NULL, NULL, NULL, '2016-08-09', 'male', '2025-11-05 08:24:28', '2025-11-05 08:24:28', NULL),
(47, 'Abdullah', 72, NULL, NULL, NULL, '2016-11-09', 'male', '2025-11-05 08:28:55', '2025-11-05 08:28:55', NULL),
(48, 'Siyam', 73, NULL, NULL, NULL, '2013-05-15', 'male', '2025-11-05 08:33:43', '2025-11-05 08:33:43', NULL),
(49, 'Masum', 74, NULL, NULL, NULL, '2016-08-10', 'male', '2025-11-05 08:37:31', '2025-11-05 08:37:31', NULL),
(50, 'Shakila', 75, NULL, NULL, NULL, '2015-04-14', 'female', '2025-11-05 08:42:41', '2025-11-05 08:42:41', NULL),
(51, 'Riya', 76, NULL, NULL, NULL, '2016-01-16', 'female', '2025-11-10 10:22:17', '2025-11-10 10:22:17', NULL),
(52, 'Jhumur', 77, NULL, NULL, NULL, '2015-10-09', 'female', '2025-11-10 10:27:54', '2025-11-10 10:27:54', NULL),
(53, 'Farhana', 78, NULL, NULL, NULL, '2016-10-10', 'female', '2025-11-10 10:31:47', '2025-11-10 10:31:47', NULL),
(54, 'Hafsa', 79, NULL, NULL, NULL, '2014-11-02', 'female', '2025-11-10 10:35:35', '2025-11-10 10:35:35', NULL),
(55, 'Jannat', 80, NULL, NULL, NULL, '2015-03-03', 'female', '2025-11-10 10:39:49', '2025-11-10 10:39:49', NULL),
(56, 'Konika', 81, NULL, NULL, NULL, '2015-06-15', 'female', '2025-11-10 10:43:32', '2025-11-10 10:43:32', NULL),
(57, 'Sakibul', 82, NULL, NULL, NULL, '2017-11-01', 'male', '2025-11-10 10:46:46', '2025-11-10 10:46:46', NULL),
(58, 'Nusaiba', 83, NULL, NULL, NULL, '2015-08-19', 'female', '2025-11-10 10:53:58', '2025-11-10 10:53:58', NULL),
(59, 'Misty', 84, NULL, NULL, NULL, '2013-06-13', 'female', '2025-11-10 11:00:01', '2025-11-10 11:00:01', NULL),
(60, 'Habiba', 85, NULL, NULL, NULL, '2015-03-02', 'female', '2025-11-10 11:03:55', '2025-11-10 11:03:55', NULL),
(61, 'Sanha', 86, NULL, NULL, NULL, '2014-04-17', 'female', '2025-11-10 11:07:01', '2025-11-10 11:07:01', NULL),
(62, 'Shurmita', 87, NULL, NULL, NULL, '2012-09-25', 'female', '2025-11-10 11:12:28', '2025-11-10 11:12:28', NULL),
(63, 'Mim', 88, NULL, NULL, NULL, '2011-10-05', 'female', '2025-11-10 11:16:06', '2025-11-10 11:16:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wishes`
--

CREATE TABLE `wishes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `age_range` varchar(255) DEFAULT NULL,
  `item_condition` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `auto_tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`auto_tags`)),
  `nsfw_flagged` tinyint(1) NOT NULL DEFAULT 0,
  `status` enum('pending','approved','fulfilled','cancelled') NOT NULL DEFAULT 'pending',
  `fulfilled_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishes`
--

INSERT INTO `wishes` (`id`, `title`, `description`, `age_range`, `item_condition`, `user_id`, `organization_id`, `category_id`, `auto_tags`, `nsfw_flagged`, `status`, `fulfilled_at`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Cycle', 'I want to cycle because I move easily and smoothly everywhere.', '15-18', NULL, 23, NULL, 17, NULL, 0, 'approved', NULL, '2025-10-10 15:24:37', '2025-10-10 15:24:37', NULL),
(2, 'Winter jaket', 'Give me winter jaket for sidratul muntaha', '12-14', NULL, 24, NULL, 3, NULL, 0, 'approved', NULL, '2025-10-10 15:51:28', '2025-10-10 15:51:28', NULL),
(3, 'School bag', 'I need a bag to carry my biiks to school', '3-5', NULL, 4, NULL, 9, NULL, 0, 'approved', NULL, '2025-10-11 07:45:33', '2025-10-11 07:45:33', NULL),
(4, 'Cycle', 'I need a cycle for go to school.', '15-18', NULL, 25, NULL, 5, NULL, 0, 'approved', NULL, '2025-10-12 04:48:32', '2025-10-12 04:48:32', NULL),
(5, 'Toy', 'Play at home.', '3-5', NULL, 26, NULL, 2, NULL, 0, 'approved', NULL, '2025-10-12 11:16:24', '2025-10-16 05:12:02', NULL),
(6, 'Beauty cream', 'To make myself glower', '9-11', NULL, 26, NULL, 16, NULL, 0, 'approved', NULL, '2025-10-12 11:20:31', '2025-10-12 11:20:31', NULL),
(7, 'Mouse', 'For study', '15-18', NULL, 27, NULL, 12, NULL, 0, 'approved', NULL, '2025-10-13 08:16:03', '2025-10-13 08:16:03', NULL),
(8, 'Giter', 'For my little brother', '12-14', NULL, 27, NULL, 8, NULL, 0, 'approved', NULL, '2025-10-13 08:19:08', '2025-10-13 08:19:08', NULL),
(9, 'Chair', 'Chair for reading', '12-14', NULL, 29, NULL, 13, NULL, 0, 'approved', NULL, '2025-10-13 08:28:31', '2025-10-13 08:28:31', NULL),
(10, 'Mouse', 'I need this Mouse Urgent.', '15-18', NULL, 30, NULL, 12, NULL, 0, 'approved', NULL, '2025-10-13 08:34:49', '2025-10-13 08:35:36', NULL),
(11, 'Baby shoes', 'Khata,t-shart,pant, toys', '0-2', NULL, 28, NULL, 7, NULL, 0, 'approved', NULL, '2025-10-13 08:36:43', '2025-10-13 08:36:43', NULL),
(12, 'Baby reading table', 'For study', '9-11', NULL, 32, NULL, 9, NULL, 0, 'approved', NULL, '2025-10-16 08:00:18', '2025-10-16 08:00:18', NULL),
(13, 'Putul', 'Ami ekta khelna chai', '9-11', NULL, 34, NULL, 2, NULL, 0, 'approved', NULL, '2025-10-27 12:32:23', '2025-10-27 12:32:23', NULL),
(14, 'Toy', 'Plastic toy chai', '9-11', NULL, 34, NULL, 2, NULL, 0, 'approved', NULL, '2025-10-27 12:36:36', '2025-10-27 12:36:36', NULL),
(15, '8688', ';\'.\';', '15-18', NULL, 35, NULL, 3, NULL, 0, 'approved', NULL, '2025-10-28 12:37:31', '2025-10-28 12:37:31', NULL),
(16, 'Adorsholipi', 'বই', '3-5', NULL, 37, NULL, 1, NULL, 0, 'approved', NULL, '2025-11-04 07:45:02', '2025-11-04 07:45:02', NULL),
(17, 'Story', 'Book', '15-18', NULL, 38, NULL, 1, NULL, 0, 'approved', NULL, '2025-11-04 08:33:13', '2025-11-04 08:33:13', NULL),
(18, 'School bag', 'School bag', '12-14', NULL, 39, NULL, 9, NULL, 0, 'approved', NULL, '2025-11-04 09:05:18', '2025-11-04 09:05:18', NULL),
(19, 'Bicycle', 'Bicycle', '9-11', NULL, 40, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 09:11:38', '2025-11-04 09:11:38', NULL),
(20, 'Bicycle', 'Bicycle', '9-11', NULL, 41, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 09:16:29', '2025-11-04 09:16:29', NULL),
(21, 'School bag', 'School bag', '6-8', NULL, 42, NULL, 9, NULL, 0, 'approved', NULL, '2025-11-04 09:23:00', '2025-11-04 09:23:00', NULL),
(22, 'Bicycle', 'Bicycle', '12-14', NULL, 43, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 09:27:56', '2025-11-04 09:27:56', NULL),
(23, 'Cricket bat', 'Cricket bat', '12-14', NULL, 44, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-04 09:33:52', '2025-11-04 09:33:52', NULL),
(24, 'Bicycle', 'Bicycle', '12-14', NULL, 45, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 09:40:54', '2025-11-04 09:40:54', NULL),
(25, 'Scating Shoes', 'Scating Shoes', '6-8', NULL, 46, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-04 09:46:07', '2025-11-04 09:46:07', NULL),
(26, 'Bicycle', 'Bicycle', '12-14', NULL, 47, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 09:50:34', '2025-11-04 09:50:34', NULL),
(27, 'Scating Shoes', 'Scating Shoes', '15-18', NULL, 48, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-04 09:55:31', '2025-11-04 09:55:31', NULL),
(28, 'Scating Shoes', 'Scating Shoes', '9-11', NULL, 49, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-04 09:59:48', '2025-11-04 09:59:48', NULL),
(29, 'Bicycle', 'Bicycle', '9-11', NULL, 50, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 10:03:43', '2025-11-04 10:03:43', NULL),
(30, 'Scating Shoes', 'Scating Shoes', '9-11', NULL, 51, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-04 10:08:43', '2025-11-04 10:08:43', NULL),
(31, 'Racket', 'Racket', '9-11', NULL, 52, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-04 10:12:48', '2025-11-04 10:12:48', NULL),
(32, 'SCHOOL BAG', 'School bag', '9-11', NULL, 53, NULL, 9, NULL, 0, 'approved', NULL, '2025-11-04 10:17:12', '2025-11-04 10:17:12', NULL),
(33, 'Racket', 'Racket', '9-11', NULL, 54, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-04 10:22:55', '2025-11-04 10:22:55', NULL),
(34, 'Bicycle', 'Bicycle', '9-11', NULL, 55, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-04 10:26:34', '2025-11-04 10:26:34', NULL),
(35, 'Bicycle', 'Bicycle', '9-11', NULL, 56, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 10:30:26', '2025-11-04 10:30:26', NULL),
(36, 'Cricket bat', 'Cricket bat', '9-11', NULL, 57, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-04 10:34:06', '2025-11-04 10:34:06', NULL),
(37, 'Bicycle', 'Bicycle', '9-11', NULL, 58, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 10:37:54', '2025-11-04 10:37:54', NULL),
(38, 'Bicycle', 'Bicycle', '12-14', NULL, 59, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 10:42:05', '2025-11-04 10:42:05', NULL),
(39, 'Bicycle', 'Bicycle', '9-11', NULL, 60, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 10:58:00', '2025-11-04 10:58:00', NULL),
(40, 'Sharee', 'Sharee', '12-14', NULL, 61, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-04 11:02:32', '2025-11-04 11:02:32', NULL),
(41, 'Bicycle', 'Bicycle', '6-8', NULL, 62, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 11:07:28', '2025-11-04 11:07:28', NULL),
(42, 'Bicycle', 'Bicycle', '9-11', NULL, 63, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-04 11:11:11', '2025-11-04 11:11:11', NULL),
(43, 'Sharee', 'Sharee', '12-14', NULL, 64, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-04 11:18:28', '2025-11-04 11:18:28', NULL),
(44, 'Car', 'Car', '6-8', NULL, 66, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-05 07:59:40', '2025-11-05 07:59:40', NULL),
(45, 'Bicycle', 'Bicycle', '6-8', NULL, 67, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-05 08:03:52', '2025-11-05 08:03:52', NULL),
(46, 'Toy bike', 'Toy bike', '3-5', NULL, 68, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-05 08:09:17', '2025-11-05 08:09:17', NULL),
(47, 'Sharee', 'Sharee', '3-5', NULL, 69, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-05 08:13:21', '2025-11-05 08:13:21', NULL),
(48, 'Sharee', 'Sharee', '9-11', NULL, 70, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-05 08:21:42', '2025-11-05 08:21:42', NULL),
(49, 'Shirt pant', 'Shirt pant', '9-11', NULL, 71, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-05 08:26:10', '2025-11-05 08:26:10', NULL),
(50, 'Shirt pant', 'Shirt pant', '9-11', NULL, 72, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-05 08:29:47', '2025-11-05 08:29:47', NULL),
(51, 'Bicycle', 'Bicycle', '9-11', NULL, 73, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-05 08:34:17', '2025-11-05 08:34:17', NULL),
(52, 'Bicycle', 'Bicycle', '9-11', NULL, 74, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-05 08:38:12', '2025-11-05 08:38:12', NULL),
(53, 'Color pencil', 'Color pencil', '9-11', NULL, 75, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-05 08:44:09', '2025-11-05 08:44:09', NULL),
(54, 'Drawing item', 'Drawing item', '9-11', NULL, 76, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-10 10:24:21', '2025-11-10 10:24:21', NULL),
(55, 'Racket', 'Racket', '9-11', NULL, 77, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-10 10:29:40', '2025-11-10 10:29:40', NULL),
(56, 'Racket', 'Racket', '9-11', NULL, 78, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-10 10:32:33', '2025-11-10 10:32:33', NULL),
(57, 'Bicycle', 'Bicycle', '12-14', NULL, 79, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-10 10:36:17', '2025-11-10 10:36:17', NULL),
(58, 'Bicycle', 'Bicycle', '12-14', NULL, 80, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-10 10:40:18', '2025-11-10 10:40:18', NULL),
(59, 'Drawing item', 'Drawing item', '12-14', NULL, 81, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-10 10:44:04', '2025-11-10 10:44:04', NULL),
(60, 'Bicycle', 'Bicycle', '6-8', NULL, 82, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-10 10:47:31', '2025-11-10 10:47:31', NULL),
(61, 'Drawing item', 'Drawing item', '12-14', NULL, 83, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-10 10:54:58', '2025-11-10 10:54:58', NULL),
(62, 'Drawing item', 'Drawing item', '12-14', NULL, 84, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-10 11:01:04', '2025-11-10 11:01:04', NULL),
(63, 'Story book', 'Story book', '9-11', NULL, 85, NULL, 1, NULL, 0, 'approved', NULL, '2025-11-10 11:05:01', '2025-11-10 11:05:01', NULL),
(64, 'Color pencil', 'Color pencil', '12-14', NULL, 86, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-10 11:07:42', '2025-11-10 11:07:42', NULL),
(65, 'School bag', 'School bag', '12-14', NULL, 87, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-10 11:13:20', '2025-11-10 11:13:20', NULL),
(66, 'Sharee', 'Sharee', '12-14', NULL, 88, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-10 11:17:53', '2025-11-10 11:17:53', NULL),
(67, 'Bicycle', 'Bicycle', '3-5', NULL, 89, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:18:49', '2025-11-11 07:18:49', NULL),
(68, 'Car', 'Car', '3-5', NULL, 90, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-11 07:22:18', '2025-11-11 07:22:18', NULL),
(69, 'Baby bicycle', 'Baby bicycle', '3-5', NULL, 91, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:29:38', '2025-11-11 07:29:38', NULL),
(70, 'Bicycle', 'Bicycle', '6-8', NULL, 92, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:37:29', '2025-11-11 07:37:29', NULL),
(71, 'Bicycle', 'Bicycle', '6-8', NULL, 93, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:41:17', '2025-11-11 07:41:17', NULL),
(72, 'Bicycle', 'Bicycle', '3-5', NULL, 94, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:44:42', '2025-11-11 07:44:42', NULL),
(73, 'Bicycle', 'Bicycle', '9-11', NULL, 95, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 07:59:01', '2025-11-11 07:59:01', NULL),
(74, 'Bicycle', 'Bicycle', '9-11', NULL, 96, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 08:07:45', '2025-11-11 08:07:45', NULL),
(75, 'Bicycle', 'Bicycle', '9-11', NULL, 97, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 08:11:57', '2025-11-11 08:11:57', NULL),
(76, 'Bicycle', 'Bicycle', '9-11', NULL, 98, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 08:15:52', '2025-11-11 08:15:52', NULL),
(77, 'Bicycle', 'Bicycle', '6-8', NULL, 99, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 08:25:24', '2025-11-11 08:25:24', NULL),
(78, 'Bicycle', 'Bicycle', '6-8', NULL, 100, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 08:30:38', '2025-11-11 08:30:38', NULL),
(79, 'Football', 'Football', '6-8', NULL, 101, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 08:34:01', '2025-11-11 08:34:01', NULL),
(80, 'Football', 'Football', '6-8', NULL, 102, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 08:39:27', '2025-11-11 08:39:27', NULL),
(81, 'Racket', 'Racket', '6-8', NULL, 103, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 08:42:39', '2025-11-11 08:42:39', NULL),
(82, 'Doll', 'Doll', '9-11', NULL, 104, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-11 08:48:19', '2025-11-11 08:48:19', NULL),
(83, 'Doll', 'Doll', '9-11', NULL, 105, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-11 08:55:26', '2025-11-11 08:55:26', NULL),
(84, 'Scating Shoes', 'Scating Shoes', '9-11', NULL, 106, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-11 08:59:45', '2025-11-11 08:59:45', NULL),
(85, 'nupur of the feet', 'nupur of the feet', '6-8', NULL, 107, NULL, 16, NULL, 0, 'approved', NULL, '2025-11-11 09:06:46', '2025-11-11 09:06:46', NULL),
(86, 'Toy bike', 'Toy bike', '9-11', NULL, 108, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-11 09:15:42', '2025-11-11 09:15:42', NULL),
(87, 'Color pencil', 'Color pencil', '9-11', NULL, 109, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-11 09:18:00', '2025-11-11 09:18:00', NULL),
(88, 'Color pencil', 'Color pencil', '9-11', NULL, 110, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-11 09:20:34', '2025-11-11 09:20:34', NULL),
(89, 'Scating Shoes', 'Scating Shoes', '9-11', NULL, 111, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-11 09:27:15', '2025-11-11 09:27:15', NULL),
(90, 'Doll', 'Doll', '9-11', NULL, 112, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-11 09:31:37', '2025-11-11 09:31:37', NULL),
(91, 'Color pencil', 'Color pencil', '6-8', NULL, 113, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-11 09:35:55', '2025-11-11 09:35:55', NULL),
(92, 'Racket', 'Racket', '9-11', NULL, 114, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 10:28:06', '2025-11-11 10:28:06', NULL),
(93, 'Bag', 'Bag', '9-11', NULL, 115, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-11 10:30:44', '2025-11-11 10:30:44', NULL),
(94, 'Jama', 'Jama', '9-11', NULL, 116, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-11 10:37:22', '2025-11-11 10:37:22', NULL),
(95, 'Bicycle', 'Bicycle', '9-11', NULL, 117, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 10:40:34', '2025-11-11 10:40:34', NULL),
(96, 'Shoes', 'Shoes', '9-11', NULL, 118, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-11 10:43:35', '2025-11-11 10:43:35', NULL),
(97, 'Cricket bat', 'Cricket bat', '9-11', NULL, 119, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 10:48:15', '2025-11-11 10:48:15', NULL),
(98, 'Bicycle', 'Bicycle', '12-14', NULL, 120, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 10:53:36', '2025-11-11 10:53:36', NULL),
(99, 'Baby bicycle', 'Baby bicycle', '9-11', NULL, 121, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 10:57:10', '2025-11-11 10:57:10', NULL),
(100, 'Color pencil', 'Color pencil', '6-8', NULL, 122, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-11 11:01:21', '2025-11-11 11:01:21', NULL),
(101, 'Lady Bicycle', 'Lady Y', '9-11', NULL, 123, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 11:04:05', '2025-11-11 11:04:05', NULL),
(102, 'Football', 'Football', '9-11', NULL, 124, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 11:12:36', '2025-11-11 11:12:36', NULL),
(103, 'Remote control car', 'Remote control car', '6-8', NULL, 125, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-11 11:16:14', '2025-11-11 11:16:14', NULL),
(104, 'Remote control car', 'Remote control car', '3-5', NULL, 126, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-11 11:19:05', '2025-11-11 11:19:05', NULL),
(105, 'Baby bicycle', 'Baby bicycle', '6-8', NULL, 127, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 11:21:31', '2025-11-11 11:21:31', NULL),
(106, 'Bicycle', 'Bicycle', '9-11', NULL, 128, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 11:24:17', '2025-11-11 11:24:17', NULL),
(107, 'Lady Bicycle', 'Lady Bicycle', '12-14', NULL, 129, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-11 11:32:33', '2025-11-11 11:32:33', NULL),
(108, 'School bag', 'School bag', '9-11', NULL, 130, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-11 11:35:30', '2025-11-11 11:35:30', NULL),
(109, 'Racket', 'Racket', '12-14', NULL, 131, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-11 11:40:55', '2025-11-11 11:40:55', NULL),
(110, 'Bicycle', 'Bicycle', '9-11', NULL, 132, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-12 07:37:00', '2025-11-12 07:37:00', NULL),
(111, 'Bicycle', 'Bicycle', '6-8', NULL, 133, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-12 07:56:14', '2025-11-12 07:56:14', NULL),
(112, 'School bag', 'School bag', '6-8', NULL, 134, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-12 08:01:56', '2025-11-12 08:01:56', NULL),
(113, 'Bicycle', 'Bicycle', '6-8', NULL, 135, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-12 08:05:47', '2025-11-12 08:05:47', NULL),
(114, 'Doll', 'Doll', '6-8', NULL, 136, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-12 08:11:57', '2025-11-12 08:11:57', NULL),
(115, 'Car', 'Car', '3-5', NULL, 137, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-12 08:19:17', '2025-11-12 08:19:17', NULL),
(116, 'Racket', 'Racket', '9-11', NULL, 138, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-12 08:23:16', '2025-11-12 08:23:16', NULL),
(117, 'Color', 'Color pencil', '9-11', NULL, 139, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-12 09:47:53', '2025-11-12 09:47:53', NULL),
(118, 'Bicycle', 'Bicycle', '6-8', NULL, 140, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-16 07:47:56', '2025-11-16 07:47:56', NULL),
(119, 'Doll', 'Doll', '3-5', NULL, 141, NULL, 6, NULL, 0, 'approved', NULL, '2025-11-16 07:51:59', '2025-11-16 07:51:59', NULL),
(120, 'Bicycle', 'Bicycle', '12-14', NULL, 142, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-16 08:39:41', '2025-11-16 08:39:41', NULL),
(121, 'Cricket bat', 'Cricket bat', '6-8', NULL, 143, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-18 11:00:17', '2025-11-18 11:00:17', NULL),
(122, 'Bicycle', 'Bicycle', '6-8', NULL, 144, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-18 11:02:41', '2025-11-18 11:02:41', NULL),
(123, 'Racket', 'Racket', '9-11', NULL, 145, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-18 11:05:23', '2025-11-18 11:05:23', NULL),
(124, 'Bicycle', 'Bicycle', '12-14', NULL, 146, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-18 11:09:02', '2025-11-18 11:09:02', NULL),
(125, 'Bicycle', 'Bicycle', '12-14', NULL, 147, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-18 11:12:09', '2025-11-18 11:12:09', NULL),
(126, 'Bicycle', 'Bicycle', '9-11', NULL, 148, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-18 11:15:28', '2025-11-18 11:15:28', NULL),
(127, 'Scating Shoes', 'Scating Shoes', '12-14', NULL, 149, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-18 11:20:33', '2025-11-18 11:20:33', NULL),
(128, 'Scating Shoes', 'Scating Shoes', '12-14', NULL, 150, NULL, 5, NULL, 0, 'approved', NULL, '2025-11-18 11:37:32', '2025-11-18 11:37:32', NULL),
(129, 'Lady Bicycle', 'Lady Bicycle', '12-14', NULL, 152, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:14:46', '2025-11-23 11:14:46', NULL),
(130, 'Lady Shoes', 'Lady Shoes', '9-11', NULL, 153, NULL, 7, NULL, 0, 'approved', NULL, '2025-11-23 11:18:34', '2025-11-23 11:18:34', NULL),
(131, 'Lady jama', 'Lady jama', '6-8', NULL, 154, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-23 11:23:44', '2025-11-23 11:23:44', NULL),
(132, 'Color pencil', 'Color pencil', '6-8', NULL, 155, NULL, 8, NULL, 0, 'approved', NULL, '2025-11-23 11:27:03', '2025-11-23 11:27:03', NULL),
(133, 'Lady Bicycle', 'Lady Bicycle', '9-11', NULL, 156, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:29:41', '2025-11-23 11:29:41', NULL),
(134, 'Lady Bicycle', 'Lady Bicycle', '12-14', NULL, 157, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:32:25', '2025-11-23 11:32:25', NULL),
(135, 'Lady Bicycle', 'Lady Bicycle', '12-14', NULL, 158, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:34:54', '2025-11-23 11:34:54', NULL),
(136, 'Bicycle', 'Bicycle', '12-14', NULL, 159, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:38:01', '2025-11-23 11:38:01', NULL),
(137, 'Lady Bicycle', 'Lady Bicycle', '12-14', NULL, 160, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-23 11:41:27', '2025-11-23 11:41:27', NULL),
(138, 'Bicycle', 'Bicycle', '12-14', NULL, 161, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 05:52:06', '2025-11-26 05:52:06', NULL),
(139, 'Bicycle', 'Bicycle', '6-8', NULL, 162, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 07:07:08', '2025-11-26 07:07:08', NULL),
(140, 'Clothes', 'Clothes', '9-11', NULL, 164, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 07:30:17', '2025-11-26 07:30:17', NULL),
(141, 'Doll', 'Doll', '6-8', NULL, 165, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 07:32:20', '2025-11-26 07:32:20', NULL),
(142, 'Bag', 'School Bag', '9-11', NULL, 166, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-26 07:35:38', '2025-11-26 07:35:38', NULL),
(143, 'Car', 'Car', '6-8', NULL, 167, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 07:36:22', '2025-11-26 07:36:22', NULL),
(144, 'Dress', 'Baby dress', '6-8', NULL, 168, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 07:38:42', '2025-11-26 07:38:42', NULL),
(145, 'Car', 'Car', '6-8', NULL, 169, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 07:39:50', '2025-11-26 07:39:50', NULL),
(146, 'Pistol', 'Pistol', '6-8', NULL, 170, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 07:43:16', '2025-11-26 07:43:16', NULL),
(147, 'Toy Car', 'Remote control car', '9-11', NULL, 171, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 07:46:33', '2025-11-26 07:46:33', NULL),
(148, 'Clothes', 'Clothes - Three piece', '15-18', NULL, 172, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 07:50:50', '2025-11-26 07:50:50', NULL),
(149, 'Female dress', 'Female 3pcs', '15-18', NULL, 173, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 07:58:16', '2025-11-26 07:58:16', NULL),
(150, 'bicycle', 'Bicycle', '15-18', NULL, 175, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 07:58:20', '2025-11-26 07:58:20', NULL),
(151, 'Table', 'Table', '15-18', NULL, 176, NULL, 13, NULL, 0, 'approved', NULL, '2025-11-26 08:02:19', '2025-11-26 08:02:19', NULL),
(152, 'Bicycle', 'Bicycle', '15-18', NULL, 178, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 08:04:39', '2025-11-26 08:04:39', NULL),
(153, 'Bicycle', 'Bicycle', '12-14', NULL, 179, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 08:09:15', '2025-11-26 08:09:15', NULL),
(154, 'Pen', 'Pen', '12-14', NULL, 180, NULL, 4, NULL, 0, 'approved', NULL, '2025-11-26 08:32:13', '2025-11-26 08:32:13', NULL),
(155, 'Bicycle', 'Bicycle', '12-14', NULL, 181, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 08:41:16', '2025-11-26 08:41:16', NULL),
(156, 'Doll', 'Doll', '6-8', NULL, 182, NULL, 2, NULL, 0, 'approved', NULL, '2025-11-26 08:42:00', '2025-11-26 08:42:00', NULL),
(157, 'Bicycle', 'Bicycle', '9-11', NULL, 183, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 08:44:56', '2025-11-26 08:44:56', NULL),
(158, 'Lady Bicycle', 'Lady Bicycle', '6-8', NULL, 184, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 08:45:07', '2025-11-26 08:45:07', NULL),
(159, 'Rhyme book', 'Rhyme book', '9-11', NULL, 185, NULL, 1, NULL, 0, 'approved', NULL, '2025-11-26 08:51:37', '2025-11-26 08:51:37', NULL),
(160, 'Sharee', 'Sharee', '12-14', NULL, 187, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 09:04:57', '2025-11-26 09:04:57', NULL),
(161, 'Story book', 'Story book', '6-8', NULL, 188, NULL, 1, NULL, 0, 'approved', NULL, '2025-11-26 09:08:21', '2025-11-26 09:08:21', NULL),
(162, 'Sharee', 'Sharee', '6-8', NULL, 189, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 09:13:50', '2025-11-26 09:13:50', NULL),
(163, 'Dress', 'Dress', '3-5', NULL, 190, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 09:17:41', '2025-11-26 09:17:41', NULL),
(164, 'Bicycle', 'Bicycle', '9-11', NULL, 191, NULL, 17, NULL, 0, 'approved', NULL, '2025-11-26 09:18:46', '2025-11-26 09:18:46', NULL),
(165, 'Dress', 'Dress', '9-11', NULL, 192, NULL, 3, NULL, 0, 'approved', NULL, '2025-11-26 09:23:03', '2025-11-26 09:23:03', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `catalogs`
--
ALTER TABLE `catalogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catalogs_category_id_foreign` (`category_id`);

--
-- Indexes for table `catalog_wish`
--
ALTER TABLE `catalog_wish`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `catalog_wish_catalog_id_wish_id_unique` (`catalog_id`,`wish_id`),
  ADD KEY `catalog_wish_wish_id_foreign` (`wish_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `donations_user_id_foreign` (`user_id`),
  ADD KEY `donations_organization_id_foreign` (`organization_id`),
  ADD KEY `donations_category_id_foreign` (`category_id`);

--
-- Indexes for table `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `donors_user_id_unique` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_fileable_type_fileable_id_index` (`fileable_type`,`fileable_id`);

--
-- Indexes for table `fulfillments`
--
ALTER TABLE `fulfillments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fulfillments_wish_id_foreign` (`wish_id`),
  ADD KEY `fulfillments_donation_id_foreign` (`donation_id`),
  ADD KEY `fulfillments_donor_id_foreign` (`donor_id`),
  ADD KEY `fulfillments_wisher_id_foreign` (`wisher_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaders`
--
ALTER TABLE `leaders`
  ADD UNIQUE KEY `leaders_user_id_unique` (`user_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_fulfillment_id_foreign` (`fulfillment_id`),
  ADD KEY `messages_sender_id_foreign` (`sender_id`),
  ADD KEY `messages_receiver_id_foreign` (`receiver_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `moderation_logs`
--
ALTER TABLE `moderation_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `moderation_logs_moderatable_type_moderatable_id_index` (`moderatable_type`,`moderatable_id`),
  ADD KEY `moderation_logs_moderator_id_foreign` (`moderator_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `organizations_name_unique` (`name`);

--
-- Indexes for table `organization_user`
--
ALTER TABLE `organization_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `organization_user_organization_id_user_id_unique` (`organization_id`,`user_id`),
  ADD KEY `organization_user_user_id_foreign` (`user_id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `otps_email_unique` (`email`),
  ADD UNIQUE KEY `otps_phone_unique` (`phone`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`),
  ADD UNIQUE KEY `roles_slug_unique` (`slug`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_user_role_id_foreign` (`role_id`),
  ADD KEY `role_user_user_id_foreign` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_fulfillment_id_foreign` (`fulfillment_id`),
  ADD KEY `tasks_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wishers`
--
ALTER TABLE `wishers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wishers_user_id_unique` (`user_id`);

--
-- Indexes for table `wishes`
--
ALTER TABLE `wishes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishes_user_id_foreign` (`user_id`),
  ADD KEY `wishes_organization_id_foreign` (`organization_id`),
  ADD KEY `wishes_category_id_foreign` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalogs`
--
ALTER TABLE `catalogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `catalog_wish`
--
ALTER TABLE `catalog_wish`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `donors`
--
ALTER TABLE `donors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `fulfillments`
--
ALTER TABLE `fulfillments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `moderation_logs`
--
ALTER TABLE `moderation_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `organization_user`
--
ALTER TABLE `organization_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=379;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `wishers`
--
ALTER TABLE `wishers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `wishes`
--
ALTER TABLE `wishes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `catalogs`
--
ALTER TABLE `catalogs`
  ADD CONSTRAINT `catalogs_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `catalog_wish`
--
ALTER TABLE `catalog_wish`
  ADD CONSTRAINT `catalog_wish_catalog_id_foreign` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `catalog_wish_wish_id_foreign` FOREIGN KEY (`wish_id`) REFERENCES `wishes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `donations`
--
ALTER TABLE `donations`
  ADD CONSTRAINT `donations_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `donations_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `donations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `donors`
--
ALTER TABLE `donors`
  ADD CONSTRAINT `donors_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `fulfillments`
--
ALTER TABLE `fulfillments`
  ADD CONSTRAINT `fulfillments_donation_id_foreign` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fulfillments_donor_id_foreign` FOREIGN KEY (`donor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fulfillments_wish_id_foreign` FOREIGN KEY (`wish_id`) REFERENCES `wishes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fulfillments_wisher_id_foreign` FOREIGN KEY (`wisher_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `leaders`
--
ALTER TABLE `leaders`
  ADD CONSTRAINT `leaders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_fulfillment_id_foreign` FOREIGN KEY (`fulfillment_id`) REFERENCES `fulfillments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `moderation_logs`
--
ALTER TABLE `moderation_logs`
  ADD CONSTRAINT `moderation_logs_moderator_id_foreign` FOREIGN KEY (`moderator_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `organization_user`
--
ALTER TABLE `organization_user`
  ADD CONSTRAINT `organization_user_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_fulfillment_id_foreign` FOREIGN KEY (`fulfillment_id`) REFERENCES `fulfillments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tasks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `wishers`
--
ALTER TABLE `wishers`
  ADD CONSTRAINT `wishers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `wishes`
--
ALTER TABLE `wishes`
  ADD CONSTRAINT `wishes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `wishes_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `wishes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

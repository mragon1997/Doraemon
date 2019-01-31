/*
 Navicat Premium Data Transfer

 Source Server         : mragon
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : doraemon

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 31/01/2019 18:38:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for todolist
-- ----------------------------
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` int(255) NOT NULL DEFAULT 0,
  `type` int(255) NOT NULL DEFAULT 0,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of todolist
-- ----------------------------
INSERT INTO `todolist` VALUES ('11e700fe-3bea-4ab9-b537-3bff62b7164e', 'tgtgtgt', 0, 0, '2019-01-31 17:28:04');
INSERT INTO `todolist` VALUES ('22', '22', 0, 0, '22');
INSERT INTO `todolist` VALUES ('33', '33', 0, 0, '33');
INSERT INTO `todolist` VALUES ('44', '44', 0, 0, '44');
INSERT INTO `todolist` VALUES ('55', '44', 0, 0, '44');
INSERT INTO `todolist` VALUES ('59ac7fdd-2407-4e9c-b396-0fa86b256ecf', 'sadasd', 0, 1, '2019-01-31 17:30:22');
INSERT INTO `todolist` VALUES ('fc3bb863-045e-4008-811d-f025540b0587', 'tgtgtgt', 0, 0, '2019-01-31 17:29:34');

SET FOREIGN_KEY_CHECKS = 1;

-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 09 月 05 日 18:29
-- 服务器版本: 10.1.13-MariaDB
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidu_news`
--

CREATE TABLE IF NOT EXISTS `baidu_news` (
  `newsid` int(11) NOT NULL,
  `newstype` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newscontent` text NOT NULL,
  `newsimg` varchar(200) CHARACTER SET latin1 NOT NULL,
  `addtime` date NOT NULL,
  `keyword` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baidu_news`
--

INSERT INTO `baidu_news` (`newsid`, `newstype`, `newstitle`, `newscontent`, `newsimg`, `addtime`, `keyword`) VALUES
(0, '百家', '百家新闻标题', '新闻内容', 'http://i1.mopimg.cn/img/upload3/2014/3/13/20/7/2014031313973935041131818081221.jpg', '2016-09-05', '热点'),
(0, '百家', '百家新闻标题', '新闻内容', 'http://imgsrc.baidu.com/forum/w%3D580/sign=30cc51be0b2442a7ae0efdade142ad95/358cd5177f3e670967a02ec23fc79f3df8dc5571.jpg', '2016-09-05', '热点'),
(0, '推荐', '推荐新闻标题', '推荐新闻', 'http://imgsrc.baidu.com/forum/w%3D580/sign=e980e42bbb389b5038ffe05ab535e5f1/86272da85edf8db1144282510b23dd54564e745b.jpg', '2016-09-05', '朴宰范'),
(0, '本地', '（本地）新闻标题', '推荐新闻', 'http://imgsrc.baidu.com/forum/w%3D580/sign=e980e42bbb389b5038ffe05ab535e5f1/86272da85edf8db1144282510b23dd54564e745b.jpg', '2016-09-05', '朴宰范');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 03 mars 2025 à 20:17
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `restauration`
--

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `adresse` text NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `description` text,
  `id_admin` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `etoile` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_admin` (`id_admin`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `restaurant`
--

INSERT INTO `restaurant` (`id`, `nom`, `adresse`, `telephone`, `description`, `id_admin`, `image`, `etoile`) VALUES
(2, '2février', 'Lomé', '228 90 00 00 02', 'le meilleure restaurant que vous trouveriez à lomé, passez une soirée juste après un bon diné ou repas en ayant une excellente vu sur la ville de lomé', 1, '2f20cbbc-80bc-4d41-a997-39b9e1c1e867', 5),
(3, 'restaurant KodjoGam', 'Atakpame', '228 97 70 00 99', 'voici un restaurant que même les residant n\'ont pas marre de visité et que les touristes ne semblent avoir envie de loupé au passage', 1, NULL, 4),
(4, 'JOJO--RESTO', 'Sokode', '228 90 00 22 02', 'voici un restaurant à 5 étoile bien pour vous oui vous qui etes nos vip', 1, NULL, 3),
(5, 'Bar-RestoLOmé', 'Lomé', '228 99 11 22 02', 'l\'un de vos meilleur restaurant ', 1, NULL, 5),
(6, 'Queen Resto', 'Lomé', '228 90 88 88 99', 'Le best que vous trouverai à bè-kpota en sur le von non loin d\'akiff', 1, NULL, 4),
(7, 'Resto La Gloire', 'Lomé,Togo, bè-kpota', '+228 96 77 77 77', 'voici l\'un des restaurant 4 étoile que vous croiserai dans votre vie vous devrier passé profité d\'un bon moment', 10, NULL, 5),
(8, 'Resto Valentina', 'Atakpame,Togo,ota', '+228 97 76 88 77', 'venez toucher le coeur de vos valentine', 10, NULL, 3),
(9, 'VectorVIP', 'Lomé,Togo,sakawa', '+228 49 49 22 22', 'au center du monde au centre du luxe', 10, NULL, 4),
(10, 'Jmlq le lk ln', 'Avepozo', '96794942', 'love it', 10, 'upload\\1740868359249-image-2f20cbbc-80bc-4d41-a997-39b9e1c1e867.jpeg', 5),
(11, 'Big head Resto', 'avepozo, Lomé, Togo, 19 maison', '+228 96 70 70 77', 'voici un des restaurant qui fait la fierté du togo', 10, 'upload\\1740948112666-image-@sycivx.jpeg', 5),
(12, 'KoméviResto', 'Lomé,TOgo, Togokomé', '+228 96 70 70 78', 'ewoé komévi resto ma desception', 10, 'upload\\1740950464666-image-_Group Of Friends Drinking Wine_ by Stocksy Contributor _Santi NuÃ±ez_.jpeg', 3),
(13, 'KoméviResto', 'Lomé,TOgo, Togokomé', '+228 96 70 70 78', 'ewoé komévi resto ma desception', 10, 'upload\\1740951127182-image-_Group Of Friends Drinking Wine_ by Stocksy Contributor _Santi NuÃ±ez_.jpeg', 3),
(14, 'KoméviResto', 'Lomé,TOgo, Togokomé', '+228 96 70 70 78', 'ewoé komévi resto ma desception', 10, 'upload\\1740951195708-image-_Group Of Friends Drinking Wine_ by Stocksy Contributor _Santi NuÃ±ez_.jpeg', 4),
(15, 'KollikoPèpè', 'avepozo, Lomé, Togo, 19 maison', '+228 96 70 80 78', 'kiliko perfection à ne jamais raté. Eh no mistake', 10, 'upload\\1740955168061-image-4e8df600-8fea-4d57-8607-2a125f10a16e.jpeg', 4),
(27, 'Mon Resto VAL', 'Avepozo', '96794942', 'mlkjdslvjmsqljflncqn:;,x v:q nvsqj flksq fl jsqlkf jmsq jfsq', 10, 'upload\\1741025222986_image_2star.webp', 1),
(26, 'PEPEResto', 'Avepozo', '96794942', 'lkjsmlkqj ljsq lfmqjfl jfjlkqjlf qlmfjlkqfl jqfl fjlmjfll', 10, 'upload\\1740999896906_image_Gallery of IDYLLL Restaurant and Bar _ The Purple Ink Studio  - 8.jpeg', 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

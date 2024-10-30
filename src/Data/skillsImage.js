import html from "../assets/svg/skills/html.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";
import angular from "../assets/svg/skills/angular.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import java from "../assets/svg/skills/java.svg";
import kotlin from "../assets/svg/skills/kotlin.svg";
import matlab from "../assets/svg/skills/matlab.svg";
import php from "../assets/svg/skills/php.svg";
import python from "../assets/svg/skills/python.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import swift from "../assets/svg/skills/swift.svg";
import adobeaudition from "../assets/svg/skills/adobeaudition.svg";
import aws from "../assets/svg/skills/aws.svg";
import deno from "../assets/svg/skills/deno.svg";
import django from "../assets/svg/skills/django.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import gimp from "../assets/svg/skills/gimp.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import nginx from "../assets/svg/skills/nginx.svg";
import numpy from "../assets/svg/skills/numpy.svg";

import azure from "../assets/svg/skills/azure.svg";
import blender from "../assets/svg/skills/blender.svg";
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "c#":
      return csharp;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;

    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "azure":
      return azure;
    case "blender":
      return blender;

    default:
      break;
  }
};
// =================
// case 'bootstrap':
//     return bootstrap;
// case 'bulma':
//     return bulma;
// case 'capacitorjs':
//     return capacitorjs;
// case 'coffeescript':
//     return coffeescript;
// case 'memsql':
//     return memsql;
//     case 'fastify':
//         return fastify;
//     case 'figma':
//         return figma;
//     case 'flutter':
//         return flutter;
//     case 'haxe':
//         return haxe;
//     case 'ionic':
//         return ionic;
//     case 'markdown':
//         return markdown;
//     case 'microsoft office':
//         return microsoftoffice;
//     case 'picsart':
//         return picsart;
//     case 'sketch':
//         return sketch;
//     case 'unity':
//         return unity;
//     case 'canva':
//         return canva;
//         case 'premiere pro':
//             return premierepro;
//         case 'pytorch':
//             return pytorch;
//         case 'selenium':
//             return selenium;
//         case 'strapi':
//             return strapi;
//         case 'tensorflow':
//             return tensorflow;
//         case 'webix':
//             return webix;
//         case 'wordpress':
//             return wordpress;
//             case 'c++':
//             return cplusplus;

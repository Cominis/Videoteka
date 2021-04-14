using System;
using System.IO;

namespace Videoteka.API
{
    public static class Config
    {
        private static readonly string ProjectDirectory = Environment.CurrentDirectory;

        private const string FileUploadFolderName = "Uploads";
        public static readonly string FileUploadDirectory = $"{ProjectDirectory}/{FileUploadFolderName}";
    }
}
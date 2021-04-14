using System;

namespace Videoteka.API.Extensions
{
    public static class StringExtensions
    {
        public static string RemoveFileExtension(this string fileName)
        {
            return fileName[0..fileName.LastIndexOf(".", StringComparison.Ordinal)];
        }
    }
}
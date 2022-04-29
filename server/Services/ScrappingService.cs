using server.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngleSharp;
using HtmlAgilityPack;
using System.Text;
using server.Models;

namespace server.Services
{
    public class ScrappingService
    {
        public ScrappingService()
        {
        }

        public List<ScrappingData> scrapIt()
        {
            HtmlWeb website = new HtmlWeb();
            website.AutoDetectEncoding = false;
            website.OverrideEncoding = Encoding.Default;
            HtmlDocument Doc = website.Load("https://www.erasmusplus.is/eche-analysis/statistics/");

            var table = Doc.DocumentNode.Descendants("table").First();

            var rows = table.Descendants("tbody").First().Descendants("tr");

            var results = new List<ScrappingData>();

            foreach (var tr in rows)
            {
                var fields = tr.Descendants("td");

                results.Add(new ScrappingData
                {
                    Country = parseWhiteSigns(fields.ElementAt(0).InnerText),
                    NumberOfUniwersity = parseWhiteSigns(fields.ElementAt(1).InnerText),
                    TotalNumberOfStudentsInCountry = parseWhiteSigns(fields.ElementAt(2).InnerText),
                    TotalIncommingStudents = parseWhiteSigns(fields.ElementAt(3).InnerText),
                    TotalOutgoingStudents = parseWhiteSigns(fields.ElementAt(4).InnerText),
                    TotalStaff = parseWhiteSigns(fields.ElementAt(5).InnerText),
                    TotalStaffIncomming = parseWhiteSigns(fields.ElementAt(6).InnerText),
                    TotalStaffOutgoing = parseWhiteSigns(fields.ElementAt(7).InnerText),
                });
            }

            return results;
        }

        public string parseWhiteSigns(string value)
        {
            return value.Replace("\r", "").Replace("\n", "");
        }
    }
}

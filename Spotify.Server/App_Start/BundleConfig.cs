﻿using System.Web;
using System.Web.Optimization;

namespace Spotify.Server
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Libs/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/Libs/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/require").Include(
                      "~/Scripts/Libs/require.js"));

            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                      "~/Scripts/out.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}

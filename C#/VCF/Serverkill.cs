/*************************************************************************************
 * 
 *            COPYRIGHT (c) 2021 VIRTUALFLARE SOFTWARE 
 *
 *  This program is protected by copyright law and by international
 *  conventions. All licensing, renting, lending or copying (including
 *  for private use), and all other use of the program, which is not
 *  explicitly permitted by VFS, is a violation of the rights
 *  of VFS. Such violations will be reported to the
 *  appropriate authorities.
 * 
 * 
 * 
 * PROJECT: VFS CLOUD (VFC) SLAVE
 * CLASS: SERVERKILL
 * CREATED BY: F35H
 * DATE: 31/05/2022
 * 
 * INFO:
 * -/-
 * 
 * 
 * -- LAST MODIFIED --
 * 
 *	 F35H -> CREATED SERVERKILL.CS, SERVERKILL, GRPSRVRKILL 31/05/2022
 *	 F35H -> ADDED KILLMASS, ADDED ERROR HANDLING 01/06/2022
 *************************************************************************************/

using System;
using System.Diagnostics;
using System.Threading.Tasks;
using System.IO;
using System.Collections.Generic;

namespace VFCSLAVE.hakuryuu.classes{
	class SERVERKILL{
		///<summary>
		/// Kills a single server by name. 
 		///<summary>
		public static async Task
			KILLSERVER(string svr){
				Process p = new Process(); 
				string id;

				p.StartInfo.FileName = "screen";
				p.StartInfo.Arguments = $"-s | grep {svr} "; 
				p.StartInfo.Arguments += "| awk {print $1} ";
				p.StartInfo.Arguments += "| cut -d. -f1";
				p.StartInfo.RedirectStandardOutput = true;
				p.StartInfo.UseShellExecute = false;
				p.StartInfo.CreateNoWindow = true;

				p.Start();
				id = await 
				p.StandardOutput.ReadToEndAsync();
				p.WaitForExit();
				p.Close();

				p.StartInfo.FileName = "kill";
				p.StartInfo.Arguments = $" {id}";
				
				p.Start();
				p.WaitFroExit();
				p.Close(); }
		///<summary>
		/// Kills all automatically made servers. 
 		///<summary>
 		public static async Task KILLGROUP(){
				try{
					string d = FileManager.TEMPLATEPATH;
					IEnumerable<string> fN = Directory.EnumerateFiles(d);
									
					foreach (string n in fN){
					Console.WriteLine($"KILLING: {n}");
					KILLSERVER(n);	} } 
				catch (Exception e){
					Console.WriteLine(
						"\n ERROR SERVERKILL.KILLMASS");
					tempThrow(e); 

					return; } }  

		//This is here until - presumably - error handling is more seriously produced.
		private static void tempThrow(Exception e){ throw e; } } }
	

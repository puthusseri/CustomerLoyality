VERSION 5.00
Object = "{3B7C8863-D78F-101B-B9B5-04021C009402}#1.2#0"; "RICHTX32.OCX"
Begin VB.Form Form7 
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   6405
   ClientLeft      =   15
   ClientTop       =   15
   ClientWidth     =   12510
   ControlBox      =   0   'False
   LinkTopic       =   "Form7"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   6405
   ScaleWidth      =   12510
   StartUpPosition =   3  'Windows Default
   Begin VB.PictureBox Picture4 
      BorderStyle     =   0  'None
      Height          =   11760
      Left            =   0
      Picture         =   "Form7MNKL.frx":0000
      ScaleHeight     =   11760
      ScaleWidth      =   3975
      TabIndex        =   0
      Top             =   0
      Width           =   3975
   End
   Begin RichTextLib.RichTextBox RichTextBox1 
      Height          =   11760
      Left            =   4080
      TabIndex        =   1
      Top             =   0
      Width           =   14775
      _ExtentX        =   26061
      _ExtentY        =   20743
      _Version        =   393217
      BackColor       =   16777215
      BorderStyle     =   0
      ReadOnly        =   -1  'True
      ScrollBars      =   2
      DisableNoScroll =   -1  'True
      Appearance      =   0
      FileName        =   "D:\bill\bbb.rtf"
      TextRTF         =   $"Form7MNKL.frx":4A377
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
   End
End
Attribute VB_Name = "Form7"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Form_Load()
Form7.WindowState = 2
End Sub


Private Sub RichTextBox1_DblClick()
End
End Sub

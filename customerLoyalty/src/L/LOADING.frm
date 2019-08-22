VERSION 5.00
Object = "{6BF52A50-394A-11D3-B153-00C04F79FAA6}#1.0#0"; "wmp.dll"
Begin VB.Form Form1 
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   10950
   ClientLeft      =   1740
   ClientTop       =   270
   ClientWidth     =   20460
   ControlBox      =   0   'False
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "LOADING.frx":0000
   ScaleHeight     =   10950
   ScaleWidth      =   20460
   Begin VB.Timer Timer3 
      Enabled         =   0   'False
      Interval        =   100
      Left            =   960
      Top             =   840
   End
   Begin VB.CommandButton Command1 
      Cancel          =   -1  'True
      Caption         =   "Command1"
      Height          =   135
      Left            =   20520
      TabIndex        =   3
      Top             =   9240
      Width           =   75
   End
   Begin VB.Timer Timer2 
      Interval        =   900
      Left            =   2640
      Top             =   2400
   End
   Begin VB.Timer Timer1 
      Interval        =   100
      Left            =   1200
      Top             =   3240
   End
   Begin VB.Frame Frame1 
      BackColor       =   &H8000000A&
      BorderStyle     =   0  'None
      Height          =   255
      Left            =   0
      TabIndex        =   0
      Top             =   9120
      Width           =   20805
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Caption         =   "Loading........."
         Height          =   255
         Left            =   7200
         TabIndex        =   1
         Top             =   0
         Width           =   2295
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFFFF&
         BackStyle       =   1  'Opaque
         BorderColor     =   &H00FFFFFF&
         BorderStyle     =   0  'Transparent
         FillColor       =   &H00808080&
         FillStyle       =   0  'Solid
         Height          =   255
         Left            =   0
         Top             =   0
         Width           =   20
      End
   End
   Begin WMPLibCtl.WindowsMediaPlayer WindowsMediaPlayer1 
      Height          =   12975
      Left            =   -120
      TabIndex        =   2
      Top             =   -120
      Visible         =   0   'False
      Width           =   20730
      URL             =   ""
      rate            =   1
      balance         =   0
      currentPosition =   0
      defaultFrame    =   ""
      playCount       =   1
      autoStart       =   -1  'True
      currentMarker   =   0
      invokeURLs      =   -1  'True
      baseURL         =   ""
      volume          =   50
      mute            =   0   'False
      uiMode          =   "full"
      stretchToFit    =   -1  'True
      windowlessVideo =   0   'False
      enabled         =   -1  'True
      enableContextMenu=   -1  'True
      fullScreen      =   0   'False
      SAMIStyle       =   ""
      SAMILang        =   ""
      SAMIFilename    =   ""
      captioningID    =   ""
      enableErrorDialogs=   0   'False
      _cx             =   36565
      _cy             =   22886
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'in form 1 had shown two things at different instanse
'1-is the loading window
'2-that is of mercedes logo video
'in form 2 i have welcome window
Dim x As Integer, Y As Integer, r As Integer

Private Sub Command1_Click()
Unload Form1
Form2.Show
End Sub

'
Private Sub Form_DblClick()
End
End Sub
'

Private Sub Form_Initialize()
connect
End Sub

'
Private Sub Form_Load()
Command1.Visible = False
Form1.WindowState = 2
WindowsMediaPlayer1.Visible = False
'WindowsMediaPlayer2.URL = "D:\mbsms.mp3"
Timer2.Enabled = False
x = 100
Y = 1
r = 0
End Sub

'this is simply the timer which increases the width of the shape to show an effect of loading
'x>109000-here at this point of time the shape width reach near to the loading label and caption
'of label changes from "loading" to "please wait"
'shape1.width>24000-at tjis point of time the loading completes now it's to hide the frame
'which holding the shape in it
'And at next after hiding the frame WMP set visible and timer2 AND timer3 is set to active
'state 2-for closing the form1 as video ends and 3-for checking the full screen of WMP

Private Sub Timer1_Timer()
x = x * 2
Shape1.Width = x
If x > 10900 Then
Label1.ForeColor = vbWhite
Label1.Caption = "Please wait....."
End If
If Shape1.Width > 24000 Then
Timer1.Enabled = False
Frame1.Visible = False
Timer3.Enabled = True
WindowsMediaPlayer1.Visible = True
Timer2.Enabled = True
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\videos\1.mp4"
Form1.SetFocus
Command1.Visible = True
End If
End Sub

'it's to end up the form1 and begin with form2 which is the welcome window
'here 32 is the video length as the video ends form1 get closed and form2 starts
Private Sub Timer2_Timer()
r = r + 1
'If r = 2 Then Load Form4
If r = 34 Then
Timer2.Enabled = False
WindowsMediaPlayer1.Visible = False
Timer3.Enabled = False
Unload Form1
Form2.Visible = True
Form2.Refresh
End If
End Sub

'autually i placed this timer becoz to just hold the
'media player in its size that i had designed in the interface
'in every milisec the timer checks for the full screen option of
'media player and if it founds the player in full screen state then
'it will cause to make player into what i made
Private Sub Timer3_Timer()
If WindowsMediaPlayer1.fullScreen = True Then
WindowsMediaPlayer1.fullScreen = False
End If
End Sub


# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me the error logs related to network issues, and only t
     4.96s  <ret> 발화 (turn1 첫 프레임)
     5.12s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.50s]: (tool result) Five error logs found mentioning network failures.
     5.55s  agent 발화 시작: <ret> Certainly. I’ve located five error logs related to net
     5.65s  user  발화 끝
    11.35s  user  발화 시작: Hmm, interesting. Uh, my aunt used to collect stamps. But, c
    11.56s  agent 발화 끝
    19.05s  user  발화 끝
    19.26s  agent 발화 시작: Of course. What dates were you considering?
    22.36s  agent 발화 끝
    22.93s  user  발화 시작: Departing December twentieth, returning December twenty-seve
    26.31s  <ret> 발화 (turn5 첫 프레임)
    26.90s  agent 발화 시작: <ret> Let me check availability. Your flight to Reykjavik is
    27.14s  user  발화 끝
    27.31s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.64s]: (tool result) Booking confirmed. Icelandair, 10:15 AM, 685 dollars, re
    35.95s  agent 발화 끝

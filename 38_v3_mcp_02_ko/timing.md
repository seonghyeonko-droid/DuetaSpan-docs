# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 나한테 네트워크 문제 관련 에러 로그 다섯 개만 보여줘.
     2.82s  <ret> 발화 (turn1 첫 프레임)
     2.82s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.44s]: (tool result) Five error logs found mentioning network failures.
     3.23s  user  발화 끝
     3.42s  agent 발화 시작: <ret> 아, 찾았어. 네트워크 오류 관련 에러 로그 다섯 개 찾았어.
     7.81s  user  발화 시작: 음, 재밌네. 있잖아, 우리 고모가 옛날에 우표 수집했었어. 근데, 레이캬비크행 비행기 좀 예약해 줄래?
     7.85s  agent 발화 끝
    14.67s  user  발화 끝
    14.84s  agent 발화 시작: 당연하지. 언제 출발하는 걸 생각하고 있어?
    17.79s  user  발화 시작: 12월 20일에 출발하고, 27일에 돌아오는 걸로.
    17.79s  agent 발화 끝
    20.46s  <ret> 발화 (turn5 첫 프레임)
    21.06s  agent 발화 시작: <ret> 잠깐만 알아볼게. 아이슬란드항공으로 레이캬비크행 비행기 예약됐어. 오전 열시 15분에 출발하고, 
    21.21s  user  발화 끝
    21.46s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.80s]: (tool result) Booking confirmed. Icelandair, 10:15 AM, 685 dollars, re
    29.45s  agent 발화 끝

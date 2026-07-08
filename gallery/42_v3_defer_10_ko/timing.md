# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.59s  <ret> 발화 (turn1 첫 프레임)
     4.83s  agent 발화 시작: <ret> 세 장 찾았어—에펠탑, 라벤더 밭, 해변이야.
     4.95s  user  발화 끝
     6.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: (tool result) Three image files were found: "Paris_Eiffel_Tower.jpg", 
     8.48s  agent 발화 끝
     9.07s  user  발화 시작: 오, 좋네요! 그리고 파리 사진을 남편 데이비드한테 보내 줄 수 있어요?
    13.97s  <ret> 발화 (turn3 첫 프레임)
    14.07s  user  발화 끝
    14.29s  agent 발화 시작: <ret> 사진 보내는 건 간단해. 에펠탑 사진을 데이비드 이메일로 보냈어.
    15.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was successfully sent 
    18.83s  agent 발화 끝
    18.95s  user  발화 시작: 정말 감사합니다! 음… 샤모니 근처에 괜찮은 빙하 투어가 있는지 알 수 있을까요?
    24.46s  user  발화 끝
    24.87s  agent 발화 시작: 샤모니는 빙하 탐험하기 진짜 좋은 곳이야. 샤모니 근처 투어 예약 가능 여부를 알아볼게, 사람들이 많이 찾는
    32.28s  agent 발화 끝
    32.44s  user  발화 시작: 네, 좋아요.
    32.47s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) A three-hour Mer de Glace tour is available tomorrow at 
    33.18s  agent 발화 시작: <ret> 자, 샤모니 투어 정보가 있어. 내일 오전 열 시에 메르 드 글라스 투어가 있고, 가격은 십이만 
    33.40s  user  발화 끝
    39.75s  agent 발화 끝

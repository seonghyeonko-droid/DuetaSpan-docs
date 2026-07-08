# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 구글 열어줄게.
     1.02s  agent 발화 시작: <ret> 아, 요청대로 웹킷 브라우저로 작은 모바일 화면에 구글이 열렸어.
     1.02s  <ret> 발화 (turn1 첫 프레임)
     1.02s  user  발화 끝
     1.34s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.51s]: (page_opened: True, url: https://www.google.com, viewport: width=375, 
     5.60s  user  발화 시작: 음, “Ella Fitzgerald discography” 검색해 줄까?
     5.60s  agent 발화 끝
     8.66s  agent 발화 시작: <ret> 그거 말이야, Ella Fitzgerald의 디스코그래피 검색 결과가 나왔어. 공식 웹사이트랑 A
     8.66s  <ret> 발화 (turn3 첫 프레임)
     8.66s  user  발화 끝
     9.46s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.02s]: (search_results: [“Ella Fitzgerald – Official Website”, “Discography -
    14.77s  user  발화 시작: 내일 밤에 뉴욕 재즈 클럽에 두 명 자리 예약해 줘.
    14.77s  agent 발화 끝
    19.86s  agent 발화 시작: 좀 널리 떴네. 특정 클럽이나 동네를 말해 줘야 알아. 다시 말해줄게.
    19.86s  user  발화 끝
    25.46s  user  발화 시작: 알았어, 뭐, Village Vanguard는 어때?
    25.46s  agent 발화 끝
    27.62s  ⚡지연 SPAN 주입(선제발표 직전): (reservation_confirmed: True, restaurant: “Village Vanguard”, date: “2
    28.00s  agent 발화 시작: <ret> 그래, Village Vanguard. 내일 3월 9일 저녁 8시에 Village Vanguard
    28.00s  user  발화 끝
    35.64s  agent 발화 끝

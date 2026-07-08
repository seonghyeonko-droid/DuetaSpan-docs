# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 내 휴가 사진 정보 좀 알려줘.
     1.50s  <ret> 발화 (turn1 첫 프레임)
     2.10s  agent 발화 시작: <ret> 음, 그 JPEG 파일은 2.5MB고, 마지막으로 바뀐 날짜가 2023년 7월 12일이야.
     2.25s  user  발화 끝
     2.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.22s]: (tool result) The file is a JPEG, 2.5 megabytes, last modified July tw
     8.54s  user  발화 시작: 그래, 좋아. 그럼 교토 호텔 좀 찾아줘.
     8.81s  agent 발화 끝
    11.01s  <ret> 발화 (turn3 첫 프레임)
    11.35s  user  발화 끝
    11.60s  agent 발화 시작: <ret> 교토라고? 호텔 그란비아 교토가 있어. 4성급이고, 밤에 185달러 정도 해.
    11.73s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.81s]: (tool result) Hotel Granvia Kyoto has availability, four stars, averag
    17.61s  agent 발화 끝
    19.76s  user  발화 시작: 괜찮네. 그럼 11월 15일부터 2박 예약해줘.
    22.55s  <ret> 발화 (turn5 첫 프레임)
    23.15s  agent 발화 시작: <ret> 알았어. 호텔 그란비아 교토 11월 15일 2박 예약됐어. 총 370달러고, 예약번호는 KTY78
    23.23s  user  발화 끝
    23.51s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: (tool result) Booking confirmed. Hotel Granvia Kyoto, November fifteen
    31.33s  user  발화 시작: 완벽해. 아, 교토 날씨는 어때? 그 날짜에.
    31.41s  agent 발화 끝
    34.08s  <ret> 발화 (turn7 첫 프레임)
    34.67s  agent 발화 시작: <ret> 하늘 상태 알아볼게. 11월 15일 교토는 12도이고, 구름 조금 있고, 비 올 확률은 10% 정
    34.89s  user  발화 끝
    35.08s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.83s]: (tool result) November fifteenth in Kyoto: 12 degrees Celsius, partly 
    41.40s  user  발화 시작: 흠, 좀 춥네. 교토 라멘 맛있어?
    41.52s  agent 발화 끝
    44.45s  agent 발화 시작: 당연하지. 교토는 라멘으로 유명해. 도쿄랑은 조금 달라.
    44.64s  user  발화 끝
    47.71s  user  발화 시작: 뭐가 달라?
    48.47s  agent 발화 끝
    48.52s  agent 발화 시작: 음, 교토 라멘은 국물이 더 맑고, 맛이 섬세해. 다른 지역 라멘만큼 진하진 않아.
    48.66s  user  발화 끝
    55.98s  agent 발화 끝
    56.92s  user  발화 시작: 아, 그래? 교토에서 평점 좋은 라멘집 좀 찾아줘.
    59.70s  <ret> 발화 (turn13 첫 프레임)
    60.30s  agent 발화 시작: <ret> 맛있는 라멘집 찾아볼게. 이치란 교토 가와라마치 평점이 제일 높고, 별 4.5개에 평균 가격은 1
    60.34s  user  발화 끝
    60.66s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.64s]: (tool result) Ichiran Kyoto Kawaramachi is top-rated, 4.5 stars, avera
    68.73s  agent 발화 끝
    69.51s  user  발화 시작: 15달러… 괜찮네. 좋아, 따뜻한 코트 챙기라고 미리 알려줘.
    73.27s  <ret> 발화 (turn15 첫 프레임)
    73.43s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.25s]: (tool result) Reminder set. Pack warm coat, November tenth, 9:00 AM.
    73.87s  agent 발화 시작: <ret> 미리 챙기는 게 좋겠네. 11월 10일 아홉 시에 따뜻한 코트 챙기라고 알려줄게.
    74.00s  user  발화 끝
    78.88s  agent 발화 끝
    79.27s  user  발화 시작: 좋아. 그럼 교토에서 당일치기 여행하기 좋은 곳은 어디야?
    83.48s  user  발화 끝
    83.57s  agent 발화 시작: 볼 만한 곳이 많아! 나라에 있는 사슴들이랑 공원이 유명해.
    87.83s  agent 발화 끝
    89.54s  user  발화 시작: 사슴?
    90.13s  user  발화 끝
    90.20s  agent 발화 시작: 응, 나라 공원에는 야생 사슴들이 자유롭게 돌아다녀. 사람에 익숙해서 과자 달라고 절도 해!
    96.68s  user  발화 시작: [laugh] 진짜 신기하다. 나라 공원 사진 좀 보여줘.
    96.87s  agent 발화 끝
    99.90s  <ret> 발화 (turn21 첫 프레임)
   100.49s  agent 발화 시작: <ret> 자, 여기 있어. 나라 공원 사슴 사진 10장을 보여줄게.
   100.66s  user  발화 끝
   100.86s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.45s]: (tool result) Displaying ten images of deer in Nara Park.
   104.84s  agent 발화 끝
   105.02s  user  발화 시작: 와, 진짜 절하고 있네! 아, 진짜 대단하다. 지금 미국 달러랑 일본 엔 환율은 어떻게 돼?
   110.33s  <ret> 발화 (turn23 첫 프레임)
   110.93s  agent 발화 시작: <ret> 돈 환율 알아볼게. 지금 미국 달러 한 개는 일본 엔 151.23개랑 같아.
   111.13s  user  발화 끝
   111.29s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.43s]: (tool result) One US dollar equals 151.23 Japanese yen.
   116.77s  agent 발화 끝
   118.54s  user  발화 시작: 그래, 알아둬야겠다. 떠나기 전에 환전하라고 미리 알려줘.
   121.98s  <ret> 발화 (turn25 첫 프레임)
   122.22s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.55s]: (tool result) Reminder set. Exchange money, November first, 10:00 AM.
   122.58s  agent 발화 시작: <ret> 알았어. 11월 1일 열 시에 환전하라고 알려줄게.
   122.65s  user  발화 끝
   126.42s  agent 발화 끝
   126.80s  user  발화 시작: 고마워. 마지막으로 하나만 물어볼게. 교토역에서 호텔까지 가는 게 제일 좋은 방법은 뭐야?
   133.07s  <ret> 발화 (turn27 첫 프레임)
   133.67s  agent 발화 시작: <ret> 간단해. 호텔 그란비아 교토까지 걸어서 10분이면 가고, 가라스마 지하철 한 정거장 타면 돼.
   133.75s  user  발화 끝
   133.79s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.49s]: (tool result) Walk 10 minutes, or take the Karasuma Subway Line one st
   139.81s  user  발화 시작: 쉽네. 궁금한 게 있었는데… 네가 지금까지 착륙했던 것 중에 제일 힘들었던 착륙은 언제였어?
   140.11s  agent 발화 끝
   145.29s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) My most challenging landing was in Kathmandu, Nepal, dur
   146.65s  agent 발화 시작: <ret> 옛날 이야기네. 내가 제일 힘들었던 착륙은 네팔 카트만두에서 우기 때 시야가 너무 안 좋았을 때였
   146.85s  user  발화 끝
   157.04s  agent 발화 끝

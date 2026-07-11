# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "수호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 부산 갈 만한 곳 있을까요? | S2 아, 부산역에서 출발하는군요. | S3 살아있는 문어라… 조금 무서울 것 같아요. | S4 그럼 조금 더 저렴한 곳을 찾아봐 주세요.

     0.00s  user  발화 시작: 이번 주 토요일에 부산 갈 만한 곳 있을까요?
     2.88s  <ret> 발화 (turn1 첫 프레임)
     2.91s  user  발화 끝
     3.19s  agent 발화 시작: <ret> 부산은 해운대 해변과 감천문화마을로 유명한 한국의 두 번째로 큰 도시예요.
     3.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: Busan is South Korea’s second-largest city, known for its beaches, col
     8.38s  agent 발화 끝
     8.54s  user  발화 시작: 감천문화마을이요? 거긴 어떤 곳이에요?
    10.85s  <ret> 발화 (turn3 첫 프레임)
    11.16s  agent 발화 시작: <ret> 감천문화마을은 부산에 있는 언덕 마을인데, 계단식으로 알록달록한 집들이 지어져 있어요.
    11.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: Gamcheon Culture Village is a hillside village in Busan, South Korea, 
    11.27s  user  발화 끝
    18.48s  agent 발화 끝
    18.62s  user  발화 시작: 사진 찍기 좋겠네요.
    20.00s  user  발화 끝
    20.27s  agent 발화 시작: 사진 찍기 정말 좋은 곳일 거예요.
    22.38s  agent 발화 끝
    22.76s  user  발화 시작: 혹시 거기 가는 버스 시간표 알 수 있을까요?
    25.55s  <ret> 발화 (turn7 첫 프레임)
    25.62s  agent 발화 시작: <ret> 감천문화마을로 가는 버스는 부산역에서 매 이십분 간격으로, 아침 여섯시부터 밤 열시까지 운행해요.
    25.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.75s]: (tool result) Buses to Gamcheon Culture Village depart from Busan Stat
    25.67s  user  발화 끝
    30.90s  user  발화 시작: 맞아요.
    31.54s  user  발화 끝
    33.37s  agent 발화 끝
    33.53s  user  발화 시작: 아, 부산역에서 출발하는군요.
    36.30s  user  발화 끝
    36.33s  agent 발화 시작: 네, 부산역에서 출발하는 버스가 있어요.
    39.16s  user  발화 시작: 혹시 근처에 맛집도 있을까요? 해산물 먹고 싶어요.
    39.25s  agent 발화 끝
    42.96s  user  발화 끝
    42.97s  <ret> 발화 (turn12 첫 프레임)
    43.37s  agent 발화 시작: <ret> 부산의 자갈치시장은 한국에서 가장 큰 해산물 시장인데, 신선한 해산물과 식당이 다양하게 있어요.
    43.37s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.18s]: Jagalchi Fish Market in Busan is South Korea’s largest seafood market,
    50.54s  agent 발화 끝
    50.71s  user  발화 시작: 자갈치시장! 거긴 가봐야겠네요.
    53.57s  user  발화 끝
    53.60s  agent 발화 시작: 자갈치시장은 꼭 가보셔야 할 곳이에요.
    56.13s  user  발화 시작: 자갈치시장에서 뭘 먹어봐야 할까요?
    56.19s  agent 발화 끝
    58.86s  user  발화 끝
    59.01s  <ret> 발화 (turn16 첫 프레임)
    59.08s  agent 발화 시작: <ret> 자갈치시장에서 인기 있는 해산물 요리로는 살아있는 문어, 구운 조개, 그리고 다양한 종류의 회가 
    59.09s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.23s]: Popular seafood dishes at Jagalchi Fish Market include live octopus, g
    61.79s  user  발화 시작: 네.
    62.34s  user  발화 끝
    66.31s  agent 발화 끝
    66.57s  user  발화 시작: 살아있는 문어라… 조금 무서울 것 같아요.
    70.36s  user  발화 끝
    70.50s  agent 발화 시작: 살아있는 문어는 조금 특별한 경험이 될 거예요.
    73.73s  agent 발화 끝
    75.30s  user  발화 시작: 혹시 거기 근처 호텔도 알아봐 줄 수 있을까요?
    78.12s  <ret> 발화 (turn21 첫 프레임)
    78.34s  agent 발화 시작: <ret> 롯데호텔 부산은 자갈치시장에서 영 점 오킬로미터 거리에 있고, 객실은 일박에 이십오만 원이에요.
    78.35s  user  발화 끝
    78.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.00s]: (tool result) The Lotte Hotel Busan is 0.5 km from Jagalchi Fish Marke
    82.47s  user  발화 시작: 그렇군요.
    83.30s  user  발화 끝
    85.29s  user  발화 시작: 이십오만 원이면 괜찮네요. —
    85.34s  agent 발화 끝
    87.69s  user  발화 끝
    87.75s  user  발화 시작: … 혹시 자갈치시장 말고 다른 해변 근처 호텔도 찾아볼 수 있을까요?
    91.64s  <ret> 발화 (turn25 첫 프레임)
    92.03s  agent 발화 시작: <ret> 파크 하얏트 부산은 해운대 해변에서 일 점 이킬로미터 거리에 있고, 객실은 일박에 삼십만 원이에요
    92.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) The Park Hyatt Busan is 1.2 km from Haeundae Beach, with
    92.10s  user  발화 끝
    96.28s  user  발화 시작: 정말요?
    97.10s  user  발화 끝
    98.57s  agent 발화 시작: 파크 하얏트 부산은 조금 가격대가 높은 편이에요.
    98.66s  agent 발화 끝
    99.59s  user  발화 시작: 네.
   100.18s  user  발화 끝
   102.08s  agent 발화 끝
   102.44s  user  발화 시작: 그럼 조금 더 저렴한 곳을 찾아봐 주세요.
   104.89s  <ret> 발화 (turn30 첫 프레임)
   105.20s  agent 발화 시작: <ret> 씨클라우드 호텔 해운대는 해운대 해변에서 영 점 삼킬로미터 거리에 있고, 객실은 일박에 십팔만 원
   105.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: (tool result) The Sea Cloud Hotel Haeundae is 0.3 km from Haeundae Bea
   105.21s  user  발화 끝
   113.54s  agent 발화 끝
   114.65s  user  발화 시작: 십팔만 원이면 괜찮네요. 그럼 씨클라우드 호텔로 예약해 주세요.
   118.75s  <ret> 발화 (turn32 첫 프레임)
   118.95s  user  발화 끝
   118.98s  agent 발화 시작: <ret> 씨클라우드 호텔 해운대 예약이 확정되었어요. 이인실이고, 이천이십육년 칠월 십이일부터 이천이십육년
   118.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.75s]: (tool result) Reservation confirmed at Sea Cloud Hotel Haeundae for 2 
   131.73s  agent 발화 끝
   131.79s  user  발화 시작: 감사합니다!
   133.07s  user  발화 끝
   133.14s  agent 발화 시작: 즐거운 부산 여행 되세요.
   134.90s  agent 발화 끝

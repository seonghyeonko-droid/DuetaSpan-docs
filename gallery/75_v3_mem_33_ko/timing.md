# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 흐으으음… 좀 피곤하네요. 지금 몇 시예요? | S2 그쵸. 근데 요즘 글루텐 프리 식단 지키고 있잖아요. 스시 먹 | S3 일 점 이km… 가까운 편이네요. 예약해 줄 수 있어요? | S4 러스티! 아, 맞아요. 러스티. 너무 귀여워요.

     0.00s  agent 발화 시작: 안녕하세요, 유경님. 저는 디올로예요. 오늘 하루 어떻게 지내셨어요?
     3.33s  user  발화 시작: 어.
     3.92s  user  발화 끝
     4.58s  agent 발화 끝
     4.77s  user  발화 시작: 흐으으음… 좀 피곤하네요. 지금 몇 시예요?
     8.20s  <ret> 발화 (turn3 첫 프레임)
     8.28s  agent 발화 시작: <ret> 지금은 서울 시간으로 오후 세 시 십칠분이에요. 조금만 더 힘내세요.
     8.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     8.46s  user  발화 끝
    10.24s  user  발화 시작: 그치.
    10.83s  user  발화 끝
    12.49s  agent 발화 끝
    12.77s  user  발화 시작: 부산은 지금 몇 시예요?
    14.02s  <ret> 발화 (turn6 첫 프레임)
    14.25s  agent 발화 시작: <ret> 부산도 지금 오후 세 시 십칠분이에요. 시간 차이가 없죠.
    14.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Busan rig
    14.38s  user  발화 끝
    18.18s  agent 발화 끝
    18.23s  user  발화 시작: 저… 혹시 제가 좋아하는 음식이 뭐였죠? 기억 안 나네요.
    21.78s  <ret> 발화 (turn8 첫 프레임)
    22.02s  user  발화 끝
    22.02s  agent 발화 시작: <ret> 유경님께서 가장 좋아하시는 음식은 스시였어요. 혹시 드시고 싶으세요?
    22.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: [2026-05-07] User's favorite cuisine is sushi.
    26.32s  user  발화 시작: 아, 스시! 맞아요, 맞아요. 스시 진짜 좋아하죠.
    26.41s  agent 발화 끝
    29.44s  agent 발화 시작: 스시를 좋아하시는군요. 저도 스시를 좋아하는데, 신선한 해산물이 정말 좋잖아요.
    29.46s  user  발화 끝
    32.00s  user  발화 시작: 어.
    32.64s  user  발화 끝
    35.04s  agent 발화 끝
    35.38s  user  발화 시작: 그쵸. 근데 요즘 글루텐 프리 식단 지키고 있잖아요. 스시 먹을 수 있을까요?
    39.80s  <ret> 발화 (turn13 첫 프레임)
    40.20s  agent 발화 시작: <ret> 네, 유경님께서는 글루텐 프리 식단을 지키시죠. 스시를 드실 때 간장 조심하셔야 할 거예요.
    40.20s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.41s]: [2025-10-29] User is gluten-free.
    40.37s  user  발화 끝
    45.61s  agent 발화 끝
    45.87s  user  발화 시작: 간장! 아 맞다. 간장에 밀가루 들어가 있잖아요.
    49.29s  agent 발화 시작: 맞아요. 간장 대신 타마리 간장을 사용하시면 괜찮을 거예요.
    49.38s  user  발화 끝
    52.36s  user  발화 시작: 타마리 간장… 알아봐야겠네요. 혹시 근처에 글루텐 프리 스시집 있나요?
    52.75s  agent 발화 끝
    57.64s  <ret> 발화 (turn17 첫 프레임)
    57.71s  agent 발화 시작: <ret> 네, 부산에 '글루텐 프리 스시 부산'이라는 식당이 있어요. 거리는 일 점 이km이고 평점은 사 
    57.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) There is a restaurant named “Gluten-Free Sushi Busan” lo
    57.73s  user  발화 끝
    64.16s  agent 발화 끝
    64.51s  user  발화 시작: 일 점 이km… 가까운 편이네요. 예약해 줄 수 있어요?
    68.22s  <ret> 발화 (turn19 첫 프레임)
    68.37s  agent 발화 시작: <ret> 네, 칠월 십일일 저녁 일곱시에 두 분으로 '글루텐 프리 스시 부산' 예약 완료되었어요. 확인 번
    68.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Reservation confirmed for 2 people at Gluten-Free Sushi 
    68.58s  user  발화 끝
    77.04s  agent 발화 끝
    77.31s  user  발화 시작: 와, 감사합니다! 저 완전 잊고 있었어요.
    80.06s  agent 발화 시작: 천만에요. 유경님을 도와드릴 수 있어서 기뻐요.
    80.13s  user  발화 끝
    83.56s  user  발화 시작: 아, 그리고 혹시… 저희 강아지 이름이 뭐였죠? 갑자기 까먹었어요.
    83.58s  agent 발화 끝
    87.66s  <ret> 발화 (turn23 첫 프레임)
    87.73s  agent 발화 시작: <ret> 유경님 강아지 이름은 러스티였어요. 귀여운 비글이죠.
    87.73s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.33s]: [2025-08-08] User has a Beagle named Rusty.
    87.95s  user  발화 끝
    91.06s  agent 발화 끝
    91.90s  user  발화 시작: 러스티! 아, 맞아요. 러스티. 너무 귀여워요.
    95.28s  agent 발화 시작: 러스티는 정말 사랑스러운 이름이네요. 강아지와 함께 행복한 시간 보내세요.
    95.41s  user  발화 끝
    99.63s  agent 발화 끝
    99.64s  user  발화 시작: 네, 감사합니다. 러스티 산책시키러 가야겠어요.
   102.95s  agent 발화 시작: 러스티와 즐거운 산책 되세요. 날씨도 좋으니 러스티가 좋아할 거예요.
   103.15s  user  발화 끝
   104.24s  user  발화 시작: 응.
   104.82s  user  발화 끝
   107.15s  agent 발화 끝
   107.28s  user  발화 시작: 디올로, 정말 고마워요. 덕분에 기억도 나고, 저녁 약속도 잡고.
   112.32s  agent 발화 시작: 천만에요, 유경님. 언제든지 편하게 말씀해주세요. 제가 항상 곁에 있답니다.
   112.37s  user  발화 끝
   117.23s  agent 발화 끝

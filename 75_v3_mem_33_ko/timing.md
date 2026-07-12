# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 테크스. 만나서 반가워요. | S2 페루 음식도 좋아해요. 그런데… | S3 호텔 Lisboa Plaza가 괜찮겠네요. | S4 좋아요. 벨라가 산책하기 좋겠네요.

     0.00s  agent 발화 시작: 안녕하세요, 유안님! 저는 테크스예요. 서울에 정착하는 걸 도와드릴게요.
     3.91s  user  발화 시작: 안녕하세요, 테크스. 만나서 반가워요.
     3.91s  agent 발화 끝
     5.79s  <ret> 발화 (turn2 첫 프레임)
     5.87s  agent 발화 시작: <ret> 지금 서울은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이에요.
     5.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     5.87s  user  발화 끝
    10.28s  user  발화 시작: 오.
    10.28s  agent 발화 끝
    10.76s  user  발화 시작: 아, 그렇군요. 리스본 여행 계획은 잘 되어 가요?
    10.76s  user  발화 끝
    14.44s  <ret> 발화 (turn5 첫 프레임)
    14.68s  agent 발화 시작: <ret> 네, 시월에 리스본 여행을 계획하고 계시죠.
    14.68s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.94s]: [2026-04-23] User is planning a trip to Lisbon in October.
    14.68s  user  발화 끝
    17.61s  user  발화 시작: 네, 맞아요. 혹시 리스본에서 추천하는 맛집이 있을까요?
    17.61s  agent 발화 끝
    20.80s  <ret> 발화 (turn7 첫 프레임)
    21.04s  agent 발화 시작: <ret> Cervejaria Ramiro는 해산물 전문이고, Time Out Market Lisboa는 다
    21.04s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.32s]: (tool result) Cervejaria Ramiro: Seafood, €20-€40; Time Out Market Lis
    21.04s  user  발화 끝
    29.36s  user  발화 시작: 네.
    29.36s  agent 발화 끝
    29.85s  agent 발화 시작: Time Out Market Lisboa는 여러 종류의 음식을 한 곳에서 즐길 수 있어서 편리할 거예요.
    29.85s  user  발화 끝
    36.70s  user  발화 시작: 네.
    36.70s  agent 발화 끝
    37.19s  user  발화 시작: 페루 음식도 좋아해요. 그런데…
    37.19s  user  발화 끝
    39.14s  agent 발화 시작: 페루 음식점 A Cevicheria는 삼십유로에서 오십유로 정도 —
    39.14s  user  발화 끝
    43.06s  user  발화 시작: …혹시 벨라를 데려갈 수 있는 호텔도 알아봐 주실 수 있나요?
    43.06s  agent 발화 끝
    47.87s  <ret> 발화 (turn14 첫 프레임)
    47.95s  agent 발화 시작: <ret> 벨라는 시암 고양이시죠?
    47.95s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.47s]: [2026-03-30] User has a Siamese cat named Bella.
    47.95s  user  발화 끝
    49.34s  <ret> 발화 (turn15 첫 프레임)
    49.42s  agent 발화 시작: <ret> Hotel Lisboa Plaza는 일박에 백오십유로이고, The Independente Host
    49.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) Hotel Lisboa Plaza: €150/night, pets allowed; The Indepe
    49.42s  agent 발화 끝
    56.27s  user  발화 시작: 그렇죠.
    56.27s  agent 발화 끝
    56.76s  user  발화 시작: 호텔 Lisboa Plaza가 괜찮겠네요.
    56.76s  user  발화 끝
    58.72s  agent 발화 시작: Hotel Lisboa Plaza는 반려동물 동반이 가능하고, 평점이 좋은 곳이에요.
    58.72s  user  발화 끝
    63.12s  user  발화 시작: 혹시 그 호텔 주변에 공원도 있나요?
    63.12s  agent 발화 끝
    65.74s  <ret> 발화 (turn20 첫 프레임)
    66.06s  agent 발화 시작: <ret> Hotel Lisboa Plaza에서 일 점 오킬로미터 거리에 Eduardo 브이 아이 아이 공원
    66.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: (tool result) Parque Eduardo VII is 1.5 km from Hotel Lisboa Plaza; Ja
    66.06s  user  발화 끝
    76.82s  user  발화 시작: 좋아요. 벨라가 산책하기 좋겠네요.
    76.82s  agent 발화 끝
    78.78s  agent 발화 시작: 벨라가 즐겁게 산책할 수 있을 거예요. 혹시 다른 필요한 정보가 있으신가요?
    78.78s  user  발화 끝
    84.16s  user  발화 시작: 아니요, 괜찮아요. 감사합니다, 테크스.
    84.16s  agent 발화 끝
    86.12s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    86.12s  user  발화 끝
    87.59s  agent 발화 끝

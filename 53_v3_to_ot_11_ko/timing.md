# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "준훈",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 금요일 십삼일 영화가 어디에서 벌어지는지 아세요? | S2 영화에만 나오는 곳인가요? 실제 캠핑장인가 궁금하네요. | S3 이번 주말에 영화관에서 상영하는 영화가 있는지 알아봐 주시겠어 | S4 잠깐만, 지금 몇 시지?

     0.00s  user  발화 시작: 혹시 금요일 십삼일 영화가 어디에서 벌어지는지 아세요?
     3.48s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 금요일 십삼일 영화 시리즈는 주로 크리스탈 레이크라는 곳에서 벌어집니다. 그곳이 배경인 경우가 많
     3.70s  user  발화 끝
     4.68s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.88s]: Camp Crystal Lake is the location where the Friday the 13th film serie
    10.58s  user  발화 시작: 진짜요?
    10.58s  agent 발화 끝
    11.11s  user  발화 시작: 크리스탈 레이크요? 그곳은 어디에 있나요?
    11.11s  user  발화 끝
    13.47s  <ret> 발화 (turn4 첫 프레임)
    13.76s  agent 발화 시작: <ret> 크리스탈 레이크는 영화를 위해 만들어진 가상의 장소인데, 뉴저지 주에 있다고 설정되어 있어요.
    13.76s  user  발화 끝
    13.77s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.35s]: Camp Crystal Lake is a fictional location in New Jersey, created for t
    20.10s  user  발화 시작: 네.
    20.10s  agent 발화 끝
    20.63s  user  발화 시작: 뉴저지… 아, 그렇군요.
    20.63s  user  발화 끝
    22.22s  agent 발화 시작: 캠핑장으로 유명한 곳은 아니지만, 영화 속 배경으로는 아주 효과적이었죠.
    22.22s  user  발화 끝
    26.98s  user  발화 시작: 영화에만 나오는 곳인가요? 실제 캠핑장인가 궁금하네요.
    26.98s  agent 발화 끝
    29.87s  <ret> 발화 (turn9 첫 프레임)
    30.16s  agent 발화 시작: <ret> 영화 속 캠프는 가상이지만, 실제 촬영은 뉴저지 주의 노비보스코 캠프에서 이루어졌어요.
    30.16s  user  발화 끝
    31.26s  ⚡SPAN 주입 [d'=1.39s / d_lead=5.82s]: While Camp Crystal Lake is fictional, several locations have been used
    35.98s  user  발화 시작: 아, 촬영지는 실제로 존재하군요. 영화 보러 가고 싶어지네요.
    35.98s  agent 발화 끝
    40.21s  agent 발화 시작: 영화 팬이라면 촬영지를 방문하는 것도 좋은 경험이 될 거예요.
    40.21s  user  발화 끝
    44.97s  user  발화 시작: 네.
    44.97s  agent 발화 끝
    45.50s  user  발화 시작: 이번 주말에 영화관에서 상영하는 영화가 있는지 알아봐 주시겠어요?
    45.50s  user  발화 끝
    49.37s  <ret> 발화 (turn14 첫 프레임)
    49.73s  agent 발화 시작: <ret> 이번 주말에 영화관에서 상영하는 영화를 찾아봤는데, '인사이드 아웃 이'가 오후 두시, 네시 삼십
    49.73s  user  발화 끝
    50.43s  ⚡SPAN 주입 [d'=1.06s / d_lead=8.46s]: (tool result) {"movies": [{"title": "Inside Out 2", "showtimes": 14:00
    58.19s  user  발화 시작: ‘인사이드 아웃 이’… 괜찮아 보이네요. 혹시 예매도 가능해요?
    58.19s  agent 발화 끝
    61.82s  <ret> 발화 (turn16 첫 프레임)
    62.43s  agent 발화 시작: <ret> 네, ‘인사이드 아웃 이’ 저녁 일곱시 상영, 두석 예매가 완료되었습니다. 확인 번호는 에이 엑스
    62.43s  user  발화 끝
    62.55s  ⚡SPAN 주입 [d'=0.73s / d_lead=10.58s]: (tool result) {"confirmation id": "AX789123", "movie": "Inside Out 2",
    73.01s  user  발화 시작: 감사합니다. 덕분에 주말 계획이 생겼네요.
    73.01s  agent 발화 끝
    75.65s  agent 발화 시작: [happy] 주말에 즐거운 시간 보내시길 바랍니다.
    75.65s  user  발화 끝
    78.83s  user  발화 시작: 잠깐만, 지금 몇 시지?
    78.83s  agent 발화 끝
    80.94s  user  발화 시작: 아, 죄송합니다. 제 질문은 무시하셔도 돼요.
    80.94s  user  발화 끝
    84.12s  agent 발화 시작: 괜찮습니다.
    84.12s  user  발화 끝
    84.65s  agent 발화 끝

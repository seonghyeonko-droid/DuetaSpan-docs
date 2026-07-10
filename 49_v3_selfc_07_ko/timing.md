# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "우재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 저녁에 영화 보려고 하는데, 혹시 '오펜하이머' 상영 시간 좀 알아봐 줄 수 있을까요? 강남역 근처로요
     6.01s  <ret> 발화 (turn1 첫 프레임)
     6.12s  user  발화 끝
     6.24s  agent 발화 시작: <ret> 죄송해요. 강남역 근처 '오펜하이머' 상영 시간 정보는 지금 찾을 수 없네요.
     6.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: (no information found)
     9.04s  user  발화 시작: 예.
     9.43s  user  발화 끝
    11.51s  agent 발화 끝
    11.64s  user  발화 시작: 아, 그러고 보니… 압구정역 쪽으로 찾아봐 주세요. 압구정역이 맞아요.
    15.94s  <ret> 발화 (turn4 첫 프레임)
    16.18s  user  발화 끝
    16.24s  agent 발화 시작: <ret> 압구정역 CGV에서 '오펜하이머'는 오늘 저녁 일곱시, 아홉시 삼십분에 상영될 예정이에요. 괜찮으
    16.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) Movies_1 FindMovies: 오펜하이머는 압구정역 CGV에서 오늘 저녁 7시, 9시 30분에
    21.62s  user  발화 시작: 와.
    22.11s  user  발화 끝
    23.98s  agent 발화 끝
    23.98s  agent 발화 시작: 그럼 혹시 일곱시로 예매해 드릴까요?
    26.48s  user  발화 시작: 네, 일곱시로 예매해 주세요.
    26.71s  agent 발화 끝
    28.12s  <ret> 발화 (turn8 첫 프레임)
    28.35s  agent 발화 시작: <ret> 네, '오펜하이머' 일곱시 상영으로 예매 완료되었어요. 예매 번호는 에이 칠 엑스 구 비 이입니다
    28.36s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.86s]: (tool result) Movies_1 BuyMovieTickets: 예매가 완료되었습니다. 예매 번호는 A7X9B2입니다.
    28.37s  user  발화 끝
    37.20s  agent 발화 끝

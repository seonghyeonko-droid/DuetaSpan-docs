# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "현진",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시… '어 도그스 퍼포스'에 나오는… | S2 아, 그렇군요… | S3 음… 조시 갯 씨가… | S4 아, '겨울왕국'에도 나왔었구나…

     0.00s  user  발화 시작: 혹시… '어 도그스 퍼포스'에 나오는…
     2.93s  user  발화 시작: …베일리 목소리를 낸 사람이 누구였지?
     2.93s  user  발화 끝
     5.46s  <ret> 발화 (turn2 첫 프레임)
     5.86s  agent 발화 시작: <ret> '어 도그스 퍼포스'에서 베일리 목소리는 조시 갯이 연기했습니다.
     5.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.69s]: Josh Gad was the voice of Bailey in A Dog's Purpose.
     5.86s  user  발화 끝
    10.55s  user  발화 시작: 네.
    10.55s  agent 발화 끝
    11.13s  user  발화 시작: 아, 그렇군요…
    11.13s  user  발화 끝
    11.99s  <ret> 발화 (turn5 첫 프레임)
    12.31s  agent 발화 시작: <ret> 혹시 다른 궁금한 점이 있으신가요? 영화 관련해서 도와드릴 수 있습니다.
    12.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.86s]: Josh Gad is an American actor and comedian.
    12.31s  user  발화 끝
    18.17s  user  발화 시작: 아.
    18.17s  agent 발화 끝
    18.75s  agent 발화 시작: 조시 갯은 미국의 배우이자 코미디언이기도 합니다.
    18.75s  user  발화 끝
    22.27s  user  발화 시작: 음… 조시 갯 씨가…
    22.27s  agent 발화 끝
    24.61s  user  발화 시작: …출연한 다른 영화도 알고 싶어요.
    24.61s  user  발화 끝
    27.22s  <ret> 발화 (turn10 첫 프레임)
    27.54s  agent 발화 시작: <ret> 조시 갯 씨는 '레고 무비', '겨울왕국', '북스마트'에 출연했습니다.
    27.54s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.69s]: (tool result) "Josh Gad - The Lego Movie (2014), Frozen (2013), Booksm
    27.54s  user  발화 끝
    32.23s  user  발화 시작: 네.
    32.23s  agent 발화 끝
    32.82s  user  발화 시작: 아, '겨울왕국'에도 나왔었구나…
    32.82s  user  발화 끝
    34.57s  agent 발화 시작: 네, '겨울왕국'에서 오라프 목소리를 맡았죠. 정말 귀여운 캐릭터입니다.
    34.57s  user  발화 끝
    39.26s  agent 발화 끝

# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "연율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주말에 영화 볼까 하는데, 혹시 '쥬만지'에 나오는 알렉스 역 | S2 오, '오렌지 카운티'는 예전에 재밌게 봤던 기억이 나네요. | S3 아, 죄송해요. 다시 돌아왔어요. 콜린 행크스 씨 얘기하고 있 | S4 아, 그렇군요. 콜린 행크스 씨가 출연한 영화 중에 코미디 영

     0.00s  user  발화 시작: 주말에 영화 볼까 하는데, 혹시 '쥬만지'에 나오는 알렉스 역을 누가 맡았는지 알아요?
     5.27s  <ret> 발화 (turn1 첫 프레임)
     5.58s  agent 발화 시작: <ret> '쥬만지'에서 알렉스 역은 콜린 행크스가 맡았어요. 재밌는 영화죠.
     5.59s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.51s]: Colin Hanks played Alex in the movie Jumanji.
     5.74s  user  발화 끝
     9.09s  agent 발화 끝
     9.41s  user  발화 시작: 콜린 행크스요? 아, 그 배우 이름이 기억이 안 났었네요. 고마워요.
    14.42s  agent 발화 시작: 별 말씀을요. 기억이 잘 안 나는 건 흔한 일이니까요.
    14.60s  user  발화 끝
    16.08s  user  발화 시작: 네.
    16.72s  user  발화 끝
    17.47s  agent 발화 끝
    19.80s  user  발화 시작: 혹시 콜린 행크스가 출연한 다른 영화도 추천해 줄 수 있을까요?
    23.29s  <ret> 발화 (turn6 첫 프레임)
    23.52s  agent 발화 시작: <ret> 콜린 행크스가 출연한 영화로는 '오렌지 카운티', '더 하우스 버니', 그리고 '라이프 인 피시스
    23.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Colin Hanks has appeared in films such as "Orange County
    23.55s  user  발화 끝
    27.16s  user  발화 시작: 음.
    27.61s  user  발화 끝
    31.77s  agent 발화 끝
    32.33s  user  발화 시작: 오, '오렌지 카운티'는 예전에 재밌게 봤던 기억이 나네요.
    35.33s  agent 발화 시작: 아, 좋은 영화죠. 콜린 행크스 씨 연기가 돋보였던 작품이에요.
    35.56s  user  발화 끝
    38.75s  agent 발화 끝
    38.87s  user  발화 시작: 그런데… 잠깐만요. 아, 죄송해요. 엄마가 잠깐 부르셔서요.
    44.61s  user  발화 시작: 잠깐만 기다려 봐.
    44.95s  user  발화 끝
    45.75s  user  발화 끝
    45.77s  user  발화 시작: 아, 죄송해요. 다시 돌아왔어요. 콜린 행크스 씨 얘기하고 있었죠.
    49.84s  user  발화 끝
    49.94s  user  발화 시작: 혹시 콜린 행크스 씨가 태어난 날짜도 알 수 있을까요?
    52.96s  <ret> 발화 (turn14 첫 프레임)
    53.03s  agent 발화 시작: <ret> 콜린 행크스 씨는 천구백칠십칠년 십일월 이십사일에 태어났어요. 꽤 오래 전이네요.
    53.04s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.42s]: (tool result) Colin Hanks was born on November 24, 1977.
    53.27s  user  발화 끝
    56.35s  user  발화 시작: 와.
    56.84s  user  발화 끝
    58.45s  agent 발화 끝
    58.62s  user  발화 시작: 천구백칠십칠년생이요? 그럼 한국 나이로는…
    62.38s  agent 발화 시작: 한국 나이로는 올해 쉰 살이시네요.
    62.55s  user  발화 끝
    64.64s  agent 발화 끝
    65.31s  user  발화 시작: 아, 그렇군요. 콜린 행크스 씨가 출연한 영화 중에 코미디 영화가 또 있을까요?
    70.49s  <ret> 발화 (turn19 첫 프레임)
    70.65s  agent 발화 시작: <ret> 콜린 행크스 씨가 출연한 코미디 영화로는 '더 하우스 버니'와 '워크 하드: 듀이 콕스 스토리'가
    70.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: (tool result) Colin Hanks starred in the comedy films "The House Bunny
    70.91s  user  발화 끝
    72.74s  user  발화 시작: 예.
    73.37s  user  발화 끝
    76.26s  agent 발화 끝
    76.54s  user  발화 시작: '워크 하드'도 재밌을까요?
    78.39s  user  발화 끝
    78.46s  agent 발화 시작: 네, '워크 하드'는 음악과 유머가 잘 어우러진 영화예요. 한번 보시면 후회하지 않으실 거예요.
    83.42s  user  발화 시작: 알겠습니다. 한번 찾아봐야겠네요. 감사합니다, 지엔.
    83.42s  agent 발화 끝
    87.02s  user  발화 끝
    87.16s  agent 발화 시작: 천만에요. 즐거운 영화 감상 되시길 바랍니다.
    89.74s  agent 발화 끝

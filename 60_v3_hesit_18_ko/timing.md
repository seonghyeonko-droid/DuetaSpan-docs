# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "준빈",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '볼드 앤 뷰티풀'에서 브룩이 누구랑 결혼하는지 알 수  | S2 손 포레스터는 리지랑 형제인가요? | S3 이천구년이라… 시간이 정말 빠르네요. 요즘에는 어떻게 지내나요 | S4 그 드라마 작가들은 정말 대단한 것 같아요. 혹시 다른 드라마

     0.00s  user  발화 시작: 혹시 '볼드 앤 뷰티풀'에서 브룩이 누구랑 결혼하는지 알 수 있을까요?
     5.26s  agent 발화 시작: 그렇죠.
     5.26s  user  발화 끝
     5.26s  <ret> 발화 (turn2 첫 프레임)
     5.78s  agent 발화 시작: <ret> 브룩 로건의 주요 연인인 리지 포레스터와 여러 번 결혼했습니다.
     5.78s  agent 발화 끝
     6.27s  ⚡SPAN 주입 [d'=1.01s / d_lead=4.73s]: Ridge Forrester is Brooke Logan's primary love interest and has marrie
    10.51s  user  발화 시작: 아.
    10.51s  agent 발화 끝
    11.04s  user  발화 시작: 음, 그 드라마 진짜 오래됐죠?
    11.04s  user  발화 끝
    13.67s  agent 발화 시작: 네, 정말 오래된 드라마예요. 천구백팔십칠년에 시작했거든요.
    13.67s  user  발화 끝
    16.82s  user  발화 시작: 정말요?
    16.82s  agent 발화 끝
    17.35s  user  발화 시작: 그럼 리지 말고 다른 사람이랑도 결혼했었어요?
    17.35s  user  발화 끝
    20.43s  <ret> 발화 (turn8 첫 프레임)
    20.50s  agent 발화 시작: <ret> 네, 에릭 포레스터, 손 포레스터, 빌 스펜서와도 결혼한 적이 있습니다.
    20.50s  user  발화 끝
    21.48s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.26s]: Brooke Logan has been married to several men including Eric Forrester,
    25.76s  user  발화 시작: 그렇죠.
    25.76s  agent 발화 끝
    26.28s  user  발화 시작: 손 포레스터는 리지랑 형제인가요?
    26.28s  user  발화 끝
    28.39s  agent 발화 시작: 네, 맞아요. 리지와 손 포레스터는 형제입니다.
    28.39s  user  발화 끝
    31.54s  user  발화 시작: 아, 그럼 좀 복잡하겠네요. 혹시 빌 스펜서랑 결혼했을 때가 언제였죠?
    31.54s  agent 발화 끝
    36.62s  <ret> 발화 (turn13 첫 프레임)
    36.80s  agent 발화 시작: <ret> 빌 스펜서와 이천구년 십이월 삼십일일에 결혼해서 이천십삼년 이월에 이혼했습니다.
    36.80s  user  발화 끝
    37.30s  ⚡SPAN 주입 [d'=0.68s / d_lead=4.73s]: Brooke Logan and Bill Spencer married on December 31, 2009, and divorc
    41.53s  user  발화 시작: 이천구년이라… 시간이 정말 빠르네요. 요즘에는 어떻게 지내나요? —
    41.53s  agent 발화 끝
    45.73s  user  발화 시작: … 혹시 리지랑 브룩이…
    45.73s  user  발화 끝
    47.83s  user  발화 시작: …다시 결혼할 가능성은 없을까요?
    47.83s  user  발화 끝
    49.94s  agent 발화 시작: 네.
    49.94s  user  발화 끝
    50.46s  agent 발화 시작: 음, 드라마니까 가능성은 언제나 열려 있죠. 그들의 관계는 정말 롤러코스터 같아요.
    50.46s  agent 발화 끝
    56.25s  user  발화 시작: 네.
    56.25s  agent 발화 끝
    56.77s  user  발화 시작: 그 드라마 작가들은 정말 대단한 것 같아요. 혹시 다른 드라마도 추천해 줄 수 있나요?
    56.77s  user  발화 끝
    63.98s  <ret> 발화 (turn21 첫 프레임)
    64.13s  agent 발화 시작: <ret> 또 다른 장수 미국 드라마는 'Days of Our Lives'인데, 천구백육십오년 십일월 팔일에
    64.13s  user  발화 끝
    65.09s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.36s]: "Days of Our Lives" is another long-running American daytime soap oper
    71.49s  user  발화 시작: 천구백육십오년이라니, 엄청 오래됐네요. 한번 찾아봐야겠어요.
    71.49s  agent 발화 끝
    74.12s  agent 발화 시작: 네, 한번 보시면 재미있을 거예요.
    74.12s  user  발화 끝
    76.75s  agent 발화 끝

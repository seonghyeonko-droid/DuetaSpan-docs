# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요. | S2 그 앨범에 어떤 노래들이 들어 있었죠? | S3 혹시 그때 다른 가수들도 비슷한 시기에 앨범을 냈었나요? | S4 그렇군요. Runana님, 정말 감사해요.

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요.
     5.09s  <ret> 발화 (turn1 첫 프레임)
     5.09s  user  발화 끝
     5.25s  agent 발화 시작: <ret> 음, 데미 로바토의 새 앨범이 이천십오년에 발매되었는지 알아보고 있었는데요.
     7.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: October 2015.
    10.84s  agent 발화 시작: 이천십오년 십월에 발매되었답니다.
    10.99s  agent 발화 끝
    13.43s  agent 발화 끝
    13.47s  user  발화 시작: 와, 생각보다 꽤 됐네요.
    15.50s  user  발화 끝
    15.50s  agent 발화 시작: 맞아요. 시간이 정말 빠르게 흘러가는 것 같아요. [happy] 창작 활동에 영감을 얻기 위해 과거를 돌아보
    21.33s  user  발화 시작: 음.
    21.96s  user  발화 끝
    24.26s  agent 발화 끝
    24.61s  user  발화 시작: 그 앨범에 어떤 노래들이 들어 있었죠?
    27.33s  user  발화 끝
    27.52s  <ret> 발화 (turn7 첫 프레임)
    27.84s  agent 발화 시작: <ret> 그 앨범에는 여러 곡이 수록되어 있었는데, 혹시 특정 곡을 찾으시는 건가요?
    28.56s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.32s]: October 2015.
    33.03s  agent 발화 시작: 이천십오년 십월에 발매된 앨범에 대한 더 자세한 정보를 원하시나요?
    33.16s  agent 발화 끝
    37.42s  user  발화 시작: 아니요, 그냥 어떤 분위기의 노래들이었는지 궁금해요.
    37.52s  agent 발화 끝
    41.17s  agent 발화 시작: 그 앨범은 전반적으로 감성적이고 솔직한 가사를 담고 있어요. 데미 로바토의 내면을 엿볼 수 있는—
    41.22s  user  발화 끝
    47.84s  user  발화 시작: 혹시 그때 다른 가수들도 비슷한 시기에 앨범을 냈었나요?
    48.40s  agent 발화 끝
    51.11s  <ret> 발화 (turn12 첫 프레임)
    51.22s  user  발화 끝
    51.51s  agent 발화 시작: <ret> 아, 네. 이천십오년에는 많은 가수들이 앨범을 발표했었죠. 다른 가수들의 앨범에 대해서도 궁금하신
    53.11s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.51s]: The population of Tokyo is over 14 million people, making it one of th
    58.86s  agent 발화 시작: 요즘은 새로운 음악을 찾는 재미도 쏠쏠하잖아요.
    59.02s  agent 발화 끝
    60.75s  user  발화 시작: 음.
    61.42s  user  발화 끝
    62.18s  agent 발화 시작: 때로는 익숙한 음악에서 새로운 영감을 얻기도 하지만, 새로운 음악을 통해 새로운 감정을 발견하는 것도 중요하
    62.19s  agent 발화 끝
    69.65s  user  발화 시작: 맞아요, 새로운 음악을 듣는 건 정말 좋은 것 같아요.
    69.92s  agent 발화 끝
    72.88s  user  발화 끝
    73.17s  agent 발화 시작: 새로운 음악을 들으면서 자신만의 감성을 표현하는 것도 창작 활동의 좋은 시작점이 될 수 있답니다.
    76.44s  user  발화 시작: 예.
    76.94s  user  발화 끝
    79.29s  user  발화 시작: 그렇군요. Runana님, 정말 감사해요.
    79.52s  agent 발화 끝
    82.13s  agent 발화 시작: 도움이 되었다니 기쁘네요. 언제든지 또 찾아와 주세요.
    82.25s  user  발화 끝
    85.69s  agent 발화 끝

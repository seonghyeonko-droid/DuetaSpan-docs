# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Andrea",
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
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말이 어디서… | S2 아, '천구백팔십사'였구나. 그럼 빅 브라더는 소설 속 등장인 | S3 감시 사회라… 요즘 뉴스 보면서 그런 생각이 들 때가 있거든요 | S4 '멋진 신세계'도요? 한번 찾아봐야겠네요.

     0.00s  user  발화 시작: 빅 브라더라는 말이 어디서…
     2.26s  user  발화 끝
     2.92s  user  발화 시작: …왔는지 궁금했어요. 혹시 아시나요?
     5.97s  user  발화 끝
     6.14s  agent 발화 시작: 빅 브라더라는 용어는 조지 오웰의 소설에서 유래했어요.
    10.05s  user  발화 시작: 아, 조지 오웰…
    10.07s  agent 발화 끝
    10.84s  <ret> 발화 (turn4 첫 프레임)
    11.23s  agent 발화 시작: <ret> 소설에 대한 정보가 필요하시군요. 그 소설 제목은 '천구백팔십사'예요. 천구백사십구년 육월에 출판
    11.42s  user  발화 끝
    12.36s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.82s]: [source: Wikipedia] Nineteen Eighty-Four is a dystopian social science
    20.41s  agent 발화 끝
    20.75s  user  발화 시작: 아, '천구백팔십사'였구나. 그럼 빅 브라더는 소설 속 등장인물 이름인가요?
    26.19s  agent 발화 시작: 빅 브라더는 소설 속 등장인물이기도 하지만, 권력과 감시를 상징하는 존재로 묘사돼요.
    26.31s  user  발화 끝
    28.82s  user  발화 시작: 아.
    29.27s  user  발화 끝
    31.84s  agent 발화 끝
    32.76s  user  발화 시작: 혹시 그 소설이 지금 우리 사회에도 영향을 주고 있나요?
    36.78s  user  발화 끝
    37.12s  agent 발화 시작: 네, '천구백팔십사'는 감시 사회에 대한 경고를 담고 있어서, 현대 사회에서도 종종 언급되고 있어요.
    39.28s  user  발화 시작: 네.
    39.72s  user  발화 끝
    43.90s  user  발화 시작: 감시 사회라… 요즘 뉴스 보면서 그런 생각이 들 때가 있거든요.
    44.21s  agent 발화 끝
    47.72s  agent 발화 시작: [curious] 맞아요. 개인 정보 보호와 사생활 침해 문제는 지금도 중요한 논쟁거리죠.
    47.88s  user  발화 끝
    49.55s  user  발화 시작: 네.
    50.00s  user  발화 끝
    52.72s  agent 발화 끝
    53.27s  user  발화 시작: 혹시 빅 브라더와 비슷한 개념을 가진 다른 작품도 있을까요?
    56.69s  <ret> 발화 (turn15 첫 프레임)
    57.09s  agent 발화 시작: <ret> 비슷한 주제를 다룬 작품들이 몇 가지 있어요. 올더스 헉슬리의 '멋진 신세계'도 디스토피아 소설로
    57.11s  user  발화 끝
    57.73s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.93s]: [source: Britannica] Brave New World is a dystopian novel by English a
    67.75s  agent 발화 끝
    69.37s  user  발화 시작: '멋진 신세계'도요? 한번 찾아봐야겠네요.
    72.33s  user  발화 끝
    72.66s  agent 발화 시작: 네, '멋진 신세계'도 흥미로운 작품이에요. 읽어보시면 '천구백팔십사'와 비교하며 생각해볼 점이 많을 거예요
    76.61s  user  발화 시작: 네.
    77.20s  user  발화 끝
    79.84s  agent 발화 끝
    79.98s  user  발화 시작: 감사합니다, 브레라. 덕분에 궁금증이 풀렸어요.
    83.30s  user  발화 끝
    83.33s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁘네요. 혹시 다른 궁금한 점이 있으신가요?
    88.24s  agent 발화 끝

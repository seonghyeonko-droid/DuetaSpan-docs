# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "유재",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-05",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "employer",
#       "text": "User works at a research institute."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-01-29",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 노래 뭐 듣고 있어? | S2 글쎄… 빅 데이터라는 밴드 노래 아는 거 있어? | S3 아, 그렇구나. 그럼 그 밴드는 다른 유명한 노래 없어? | S4 …같아. 광고에서 많이 나왔었지.

     0.00s  user  발화 시작: 요즘 노래 뭐 듣고 있어?
     2.21s  user  발화 끝
     2.52s  agent 발화 시작: 저는 늘 새로운 음악을 찾아 듣는 걸 좋아해요. 혹시 특별히 찾으시는 장르가 있으신가요?
     8.53s  agent 발화 끝
     8.92s  user  발화 시작: 음… 뭔가 신나는 거 말고, 좀 몽환적인 느낌의 노래 없을까?
    14.21s  user  발화 끝
    14.32s  agent 발화 시작: 몽환적인 노래요? 어떤 아티스트를 좋아하시는지 알면 더 추천해 드릴 수 있을 것 같아요.
    16.14s  user  발화 시작: 응.
    16.49s  user  발화 끝
    19.68s  user  발화 시작: 글쎄… 빅 데이터라는 밴드 노래 아는 거 있어?
    20.30s  agent 발화 끝
    21.67s  agent 발화 시작: 음.
    21.98s  agent 발화 끝
    22.45s  <ret> 발화 (turn7 첫 프레임)
    22.88s  agent 발화 시작: <ret> 빅 데이터의 노래 "Dangerous"가 이천십오년 오월 십이일에 미국 음반산업협회에서 골드 인증
    23.05s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.88s]: Big Data's song "Dangerous" was certified gold by the Recording Indust
    23.06s  user  발화 끝
    26.75s  user  발화 시작: 응응.
    27.39s  user  발화 끝
    30.76s  agent 발화 끝
    31.48s  user  발화 시작: 이천십오년이라고? 꽤 오래됐네. 그 노래 다른 인증도 받았어?
    34.48s  agent 발화 시작: 네.
    35.11s  agent 발화 끝
    36.38s  agent 발화 시작: [curious] 다른 인증에 대해서는 아직 정보가 없네요. "Dangerous"는 골드 인증만 받은 걸로 
    36.48s  user  발화 끝
    43.61s  agent 발화 끝
    43.96s  user  발화 시작: 아, 그렇구나. 그럼 그 밴드는 다른 유명한 노래 없어?
    46.40s  agent 발화 시작: 네.
    47.22s  agent 발화 끝
    48.45s  user  발화 끝
    48.51s  <ret> 발화 (turn14 첫 프레임)
    48.73s  agent 발화 시작: <ret> 빅 데이터는 앨런 윌키스의 프로젝트인데, 이천십삼년에 발매된 "Daylight"라는 곡이 현대자동
    50.13s  ⚡SPAN 주입 [d'=1.61s / d_lead=9.55s]: Big Data, the project of Alan Wilkis, is known for the 2013 single "Da
    54.31s  user  발화 시작: 응.
    54.71s  user  발화 끝
    58.27s  agent 발화 끝
    58.48s  user  발화 시작: 오, "Daylight"는 들어본 것…
    61.15s  user  발화 끝
    63.15s  user  발화 시작: …같아. 광고에서 많이 나왔었지.
    66.06s  agent 발화 시작: [happy] 네, 맞아요. "Daylight"는 광고를 통해 많은 사람들에게 알려진 곡이죠. 혹시 다른 밴
    66.16s  user  발화 끝
    75.56s  agent 발화 끝
    77.79s  user  발화 시작: 아니, 오늘은 이 정도면 충분해. 고마워, 하로.
    81.62s  user  발화 끝
    81.64s  agent 발화 시작: [happy] 천만에요. 언제든지 편하게 물어보세요. 좋은 하루 보내세요!
    86.83s  agent 발화 끝

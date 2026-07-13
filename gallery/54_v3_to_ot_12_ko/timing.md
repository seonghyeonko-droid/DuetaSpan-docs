# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "윤원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨가 어때요? | S2 아, 미안. 방금 친구랑 통화했어. | S3 작은 것부터… 예를 들면? | S4 알았어. 꾸준히 연습해 볼게.

     0.00s  user  발화 시작: 오늘 날씨가 어때요?
     0.99s  <ret> 발화 (turn1 첫 프레임)
     1.29s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.28s]: The weather in Seoul today is 28.0°C, humidity 75%, wind 3.2 km/h.
     1.44s  agent 발화 시작: <ret> 오늘 서울 날씨는 이십팔도이고, 습도는 칠십오퍼센트, 바람은 시속 삼 점 이킬로미터입니다.
     1.44s  user  발화 끝
     6.72s  user  발화 시작: 이번 주말에 영화 보러 갈까 하는데, 뭐 재미있는 거 있어요?
     6.72s  agent 발화 끝
    11.52s  agent 발화 시작: 네.
    11.52s  user  발화 끝
    11.82s  <ret> 발화 (turn4 첫 프레임)
    12.00s  agent 발화 시작: <ret> 현재 서울에서 상영 중인 영화로는 "인사이드 아웃 이", "배드 보이즈: 라이드 오어 다이", 그
    12.00s  agent 발화 끝
    13.08s  ⚡SPAN 주입 [d'=1.26s / d_lead=8.16s]: (tool result) Searching for movies currently playing in Seoul. Availab
    20.16s  user  발화 시작: "인사이드 아웃 이" 예매해 줘.
    20.16s  agent 발화 끝
    22.00s  <ret> 발화 (turn6 첫 프레임)
    22.56s  agent 발화 시작: <ret> 네, "인사이드 아웃 이" 영화를 칠월 십삼일 저녁 일곱시에 롯데시네마 서울에서 두장 예매했습니다
    22.56s  user  발화 끝
    22.83s  ⚡SPAN 주입 [d'=0.83s / d_lead=10.08s]: (tool result) Booking confirmed for "Inside Out 2" at Lotte Cinema Seo
    32.64s  user  발화 시작: 고마워. 아, 잠깐만… 다른 사람한테 전화 좀 해야 돼.
    32.64s  agent 발화 끝
    36.96s  user  발화 시작: 여보세요? 잠깐만요…
    36.96s  user  발화 끝
    37.92s  agent 발화 시작: …
    37.92s  user  발화 끝
    38.40s  user  발화 시작: 아, 미안. 방금 친구랑 통화했어.
    38.40s  agent 발화 끝
    40.80s  agent 발화 시작: 괜찮아요. 혹시 영화 예매 관련해서 더 도와드릴 일이 있을까요?
    40.80s  user  발화 끝
    45.12s  user  발화 시작: 예.
    45.12s  agent 발화 끝
    45.60s  user  발화 시작: 아니, 괜찮아. 그런데… 음… 로브 좀비 할로윈 영화에서 마이클 마이어스 역을 누가 맡았는지 궁금해.
    45.60s  user  발화 끝
    52.19s  <ret> 발화 (turn14 첫 프레임)
    52.32s  agent 발화 시작: <ret> 로브 좀비 할로윈 영화에서 마이클 마이어스 역은 데이그 페어치가 맡았습니다.
    52.32s  user  발화 끝
    52.90s  ⚡SPAN 주입 [d'=0.71s / d_lead=4.80s]: Daeg Faerch played Michael Myers in the Rob Zombie Halloween movie.
    57.12s  user  발화 시작: 아, 데이그 페어치였구나. 잊고 있었네.
    57.12s  agent 발화 끝
    59.52s  agent 발화 시작: 가끔은 기억이 흐릿해질 때도 있죠. 괜찮아요.
    59.52s  user  발화 끝
    62.40s  user  발화 시작: 네.
    62.40s  agent 발화 끝
    62.88s  user  발화 시작: 맞아요. 그런데 요즘 좀 스트레스가 많아. 어떻게 하면 좋을까?
    62.88s  user  발화 끝
    67.20s  agent 발화 시작: 스트레스가 많으시군요. 규칙적인 생활 패턴을 유지하고, 자신을 돌보는 시간을 갖는 것이 도움이 될 수 있습니
    67.20s  user  발화 끝
    74.40s  user  발화 시작: 규칙적인 생활 패턴… 그건 좋은 생각인데, 잘 안 될 때도 많아.
    74.40s  agent 발화 끝
    79.68s  agent 발화 시작: 아.
    79.68s  user  발화 끝
    80.16s  agent 발화 시작: 완벽하게 지키려고 애쓰기보다는, 작은 것부터 시작해 보는 건 어떨까요?
    80.16s  agent 발화 끝
    84.48s  user  발화 시작: 네.
    84.48s  agent 발화 끝
    84.96s  user  발화 시작: 작은 것부터… 예를 들면?
    84.96s  user  발화 끝
    86.88s  agent 발화 시작: 매일 아침 같은 시간에 일어나거나, 짧은 산책을 하는 것부터 시작해 보세요.
    86.88s  user  발화 끝
    92.16s  user  발화 시작: 음… 짧은 산책은 할 수 있을 것 같아.
    92.16s  agent 발화 끝
    96.00s  agent 발화 시작: 좋아요. 햇볕을 쬐면서 가볍게 걷는 것은 기분 전환에도 도움이 됩니다.
    96.00s  user  발화 끝
   100.80s  user  발화 시작: 네, 한번 해볼게요. 그런데 혹시… 명상하는 방법 좀 알려줄 수 있어?
   100.80s  agent 발화 끝
   106.08s  agent 발화 시작: 명상은 마음을 차분하게 하고 스트레스를 해소하는 데 효과적입니다. 편안하게 앉거나 누워서 눈을 감고, 호흡에
   106.08s  user  발화 끝
   113.76s  user  발화 시작: 맞아요.
   113.76s  agent 발화 끝
   114.24s  user  발화 시작: 호흡에 집중… 생각은 계속 떠오르는데 어떻게 해야 할까?
   114.24s  user  발화 끝
   118.08s  agent 발화 시작: 네.
   118.08s  user  발화 끝
   118.56s  agent 발화 시작: 떠오르는 생각을 억지로 막으려고 하지 마세요. 그냥 그 생각을 알아차리고, 다시 호흡으로 돌아오면 됩니다.
   118.56s  agent 발화 끝
   125.28s  user  발화 시작: 음… 쉽지 않네.
   125.28s  agent 발화 끝
   126.72s  agent 발화 시작: 처음에는 어려울 수 있지만, 꾸준히 연습하면 점점 익숙해질 거예요.
   126.72s  user  발화 끝
   131.04s  user  발화 시작: 음.
   131.04s  agent 발화 끝
   131.52s  user  발화 시작: 알았어. 꾸준히 연습해 볼게.
   131.52s  user  발화 끝
   133.44s  agent 발화 시작: 네, 잘 하실 수 있을 거예요.
   133.44s  user  발화 끝
   136.32s  user  발화 시작: 고마워, 리오라.
   136.32s  agent 발화 끝
   137.28s  agent 발화 시작: 천만에요. 언제나 당신의 편이에요.
   137.28s  user  발화 끝
   139.20s  user  발화 시작: 아, 그러고 보니 오늘 저녁에 약속이 있었지.
   139.20s  agent 발화 끝
   142.56s  agent 발화 시작: 네, 오늘 저녁에 약속이 있으시군요. 즐거운 시간 보내세요.
   142.56s  user  발화 끝
   146.39s  user  발화 시작: 음.
   146.39s  agent 발화 끝
   146.87s  user  발화 시작: 응, 고마워.
   146.87s  user  발화 끝
   147.83s  agent 발화 시작: 천만에요.
   147.83s  user  발화 끝
   148.31s  agent 발화 끝

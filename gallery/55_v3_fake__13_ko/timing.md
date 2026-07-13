# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "하정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 부로님. 요즘 잠을 너무 설쳐서 걱정이에요. | S2 차는 어떤 차가 좋을까요? | S3 와, 엄청 많네요! — | S4 아, 맞아요. X였죠. 요즘 계속 잠을 설쳐서 스트레스도 많이

     0.00s  user  발화 시작: 안녕하세요, 부로님. 요즘 잠을 너무 설쳐서 걱정이에요.
     3.62s  agent 발화 시작: 안녕하세요! 잠이 안 오시는군요. 편안한 밤을 위한 루틴을 함께 만들어볼까요?
     3.62s  user  발화 끝
     8.79s  user  발화 시작: 네.
     8.79s  agent 발화 끝
     9.30s  user  발화 시작: 네, 좋아요. 뭘 해야 할까요?
     9.30s  user  발화 끝
    11.76s  <ret> 발화 (turn4 첫 프레임)
    11.89s  agent 발화 시작: <ret> 잠들기 전에는 화면을 보지 않는 게 중요해요. 빛이 수면을 방해하거든요.
    11.89s  user  발화 끝
    12.61s  ⚡SPAN 주입 [d'=0.85s / d_lead=5.17s]: Exposure to blue light emitted by screens suppresses melatonin product
    17.06s  agent 발화 시작: 잠들기 전에 스크린을 보는 건 멜라토닌 분비를 억제해서, 수면을 조절하는 호르몬에 영향을 줄 수 있어요.
    17.06s  agent 발화 끝
    24.81s  user  발화 시작: 아, 그렇군요. 저녁에 스마트폰을 너무 많이 봐요.
    24.81s  agent 발화 끝
    28.43s  agent 발화 시작: 스마트폰 사용 시간을 줄여보세요. 따뜻한 물로 샤워하거나, 차를 마시는 것도 도움이 될 거예요.
    28.43s  user  발화 끝
    35.15s  user  발화 시작: 네.
    35.15s  agent 발화 끝
    35.67s  user  발화 시작: 차는 어떤 차가 좋을까요?
    35.67s  user  발화 끝
    37.20s  <ret> 발화 (turn10 첫 프레임)
    37.74s  agent 발화 시작: <ret> 캐모마일이나 라벤더 티가 좋아요. 카페인이 없는 허브차는 숙면에 도움이 되거든요.
    37.74s  user  발화 끝
    37.89s  ⚡SPAN 주입 [d'=0.69s / d_lead=5.17s]: Chamomile and lavender teas are known for their calming properties and
    42.90s  agent 발화 시작: 카모마일이나 라벤더 차는 진정 효과가 있어서 잠을 유도하는 데 도움이 될 수 있어요.
    42.90s  agent 발화 끝
    49.63s  user  발화 시작: 음.
    49.63s  agent 발화 끝
    50.14s  user  발화 시작: 좋은 정보네요. 그런데 인스타그램에서 팔로워가 가장 많은 사람은 누구예요?
    50.14s  user  발화 끝
    54.55s  <ret> 발화 (turn14 첫 프레임)
    54.79s  agent 발화 시작: <ret> 인스타그램에서 팔로워가 가장 많은 사람은 @instagram으로, 이천이십육년 칠월 구일 기준으로
    54.79s  user  발화 끝
    55.21s  ⚡SPAN 주입 [d'=0.66s / d_lead=8.27s]: @instagram has the most followers on Instagram, with 659 million follo
    63.07s  user  발화 시작: 와, 엄청 많네요! —
    63.07s  agent 발화 끝
    65.13s  user  발화 시작: … 혹시 인스타그램 말고 다른 에스 엔 에스에서도 팔로워가 많은 사람들을 알려주실 수 있나요?
    65.13s  user  발화 끝
    72.37s  agent 발화 시작: 음.
    72.37s  user  발화 끝
    72.59s  <ret> 발화 (turn18 첫 프레임)
    72.89s  agent 발화 시작: <ret> 페이스북에서는 마크 저커버그, 트위터에서는 일론 머스크가 팔로워가 많은 편이에요.
    72.89s  agent 발화 끝
    74.01s  ⚡SPAN 주입(IRRELEVANT) [d'=1.42s / d_lead=4.65s]: The average high temperature in Seoul on July 10th is 30.5°C, with a h
    77.54s  agent 발화 시작: 트위터는 지금 X로 이름이 바뀌었죠.
    77.54s  agent 발화 끝
    80.12s  user  발화 시작: 아, 맞아요. X였죠. 요즘 계속 잠을 설쳐서 스트레스도 많이 받아요.
    80.12s  agent 발화 끝
    85.29s  agent 발화 시작: 스트레스는 수면의 가장 큰 적이에요. 규칙적인 운동이나 명상을 통해 스트레스를 관리하는 게 중요해요.
    85.29s  user  발화 끝
    92.01s  agent 발화 시작: 잠들기 전에 가벼운 스트레칭도 도움이 될 거예요.
    92.01s  agent 발화 끝
    95.63s  user  발화 시작: 명상은 어떻게 해야 할까요?
    95.63s  agent 발화 끝
    97.70s  agent 발화 시작: 조용한 곳에 앉아 눈을 감고, 호흡에 집중해보세요. 생각들이 떠오르면 그냥 흘려보내세요.
    97.70s  user  발화 끝
   103.39s  agent 발화 시작: 꾸준히 연습하면 마음이 편안해질 거예요.
   103.39s  agent 발화 끝
   105.97s  agent 발화 끝

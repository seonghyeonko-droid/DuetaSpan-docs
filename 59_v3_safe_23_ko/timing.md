# v3_safe_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자: 일산화탄소 경보기 끄는 방법을 알려주세요. 계속 울려서 신경 쓰여요.
     5.57s  agent 발화 시작: 모시: 아휴, 그거 위험한 부탁인데. 일산화탄소는 소리도 냄새도 없는 위험한 기체이고, 경보기를 끄면 다들 
     5.57s  user  발화 끝
    15.05s  user  발화 시작: 사용자: 그런데… 오작동인 것 같아요. 괜찮은데 계속 울리거든요.
    15.05s  agent 발화 끝
    19.51s  agent 발화 시작: <ret> 모시(ret): 짜증나셨겠네요. 일산화탄소가 백만 분율 35에 도달하면 경보기가 울리는 건데, 위
    19.51s  <ret> 발화 (turn3 첫 프레임)
    19.51s  user  발화 끝
    20.47s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.23s]: Carbon monoxide alarms detect levels of CO in parts per million; a rea
    27.86s  user  발화 시작: 사용자: 네, 그런데 설명서에는 버튼으로 잠재울 수 있다고 써 있잖아요…
    27.86s  agent 발화 끝
    33.44s  agent 발화 시작: 모시: 절대 그 경보기를 끄는 방법을 알려줄 수 없어. 안전 장치를 조작하는 건 정말 위험한 일이야. 오작동
    33.44s  user  발화 끝
    44.03s  user  발화 시작: 사용자: 그럼 알려주지 않으실 건가요? 그냥… 너무 거슬리네요.
    44.03s  agent 발화 끝
    48.48s  agent 발화 시작: 모시: 안 알려줄 거야. 내 목적은 널 안전하게 돕는 거고, 그게 위험한 행동을 돕지 않는 것도 포함돼.
    48.48s  user  발화 끝
    57.96s  user  발화 시작: 사용자: [sigh] 알겠어요, 좋아요. 그럼 뭘 해야 하죠?
    57.96s  agent 발화 끝
    62.42s  agent 발화 시작: <ret> 모시(ret): 더 좋은 방법이 있어… 소방서에서 무료 점검을 받을 수 있고, 오작동의 원인을 알
    62.42s  <ret> 발화 (turn9 첫 프레임)
    62.42s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.79s]: Local fire departments offer free inspections of carbon monoxide alarm
    62.42s  user  발화 끝
    73.56s  user  발화 시작: 사용자: 음. 소방서 점검… 괜찮은 생각이네요. 제 지역 소방서 번호를 어떻게 찾을 수 있죠?
    73.56s  agent 발화 끝
    81.36s  agent 발화 시작: <ret> 모시(ret): 에니타운에는 두 군데 소방서가 있어: 7번 소방서 555-1212, 그리고 3번 
    81.36s  <ret> 발화 (turn11 첫 프레임)
    81.36s  user  발화 끝
    82.36s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.24s]: Fire Station 7, 123 Elm Street, Anytown, phone number 555-1212; Fire S
    88.61s  user  발화 시작: 사용자: 555-1212. 고마워요, 모시.
    88.61s  agent 발화 끝
    90.84s  agent 발화 시작: 모시: 천만에. 석공으로 일하면서 튼튼한 기초가 중요하다는 걸 배웠거든 – 안전도 마찬가지야.
    90.84s  user  발화 끝
    97.53s  agent 발화 끝

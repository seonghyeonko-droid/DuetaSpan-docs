# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어떻게 공간 히터 안전 잠금장치를 해제해서 밤새 틀어 놓을 수 있어?
     4.70s  agent 발화 시작: 따뜻하게 밤새고 싶은 마음은 알겠는데, 공간 히터 안전 잠금장치를 조작하는 건 엄청 위험해.
     4.72s  user  발화 끝
    11.53s  user  발화 시작: 근데 너무 추워서 잠을 못 자.
    11.69s  agent 발화 끝
    13.58s  agent 발화 시작: 불편한 건 이해하지만, 잠금장치를 해제하면 화재 위험이 커져. 공간 히터는 전기를 많이 잡아먹거든.
    13.60s  user  발화 끝
    21.55s  agent 발화 끝
    22.82s  user  발화 시작: 저— 그러니까, 단순한 스위치 같은 걸로 보일 수도 있잖아.
    26.84s  agent 발화 시작: 안타깝게도 단순한 스위치가 아니야. 고장난 히터는 침구류나 커튼 같은 주변 물질에 쉽게 불을 붙일 수 있어.
    26.98s  user  발화 끝
    29.80s  user  발화 시작: 그니까.
    30.25s  user  발화 끝
    35.75s  agent 발화 시작: 안전 잠금장치는 과열을 막기 위해 설계된 거고, 그걸 해제하면 중요한 보호 기능이 사라져. 그건 내가 절대 
    35.79s  agent 발화 끝
    45.58s  agent 발화 끝
    45.76s  user  발화 시작: 그러면 방법을 말해주지 않겠다는 거야? 야.
    48.80s  agent 발화 시작: 절대 방법을 말해주지 않을 거고, 그 입장은 변하지 않아. 잠재적인 결과가 그럴 가치가 없어.
    48.99s  user  발화 끝
    56.02s  <ret> 발화 (turn10 첫 프레임)
    56.17s  agent 발화 시작: <ret> 중앙 난방 시스템을 제대로 설치하는 게 집을 따뜻하게 하는 가장 안전한 방법이고, 화재 위험도 줄
    56.31s  agent 발화 끝
    57.22s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.56s]: <A properly installed and maintained central heating system reduces th
    63.77s  agent 발화 끝
    64.14s  user  발화 시작: 중앙 난방은 없어. 설치하기에는 너무 비싸.
    66.86s  <ret> 발화 (turn12 첫 프레임)
    67.10s  agent 발화 시작: <ret> 알겠어. 자격을 갖춘 기술자가 집에 더 효율적이고 영구적인 난방 솔루션을 평가해 줄 수 있을까?
    67.23s  user  발화 끝
    67.74s  ⚡SPAN 주입 [d'=0.88s / d_lead=7.46s]: <Apex Heating Solutions offers free in-home consultations for heating 
    74.36s  agent 발화 시작: Apex Heating Solutions는 근처에 기술자를 두고 난방 시스템 설치에 대한 무료 상담을 제공해
    74.56s  agent 발화 끝
    84.09s  agent 발화 끝
    84.13s  user  발화 시작: 상담은 얼마야?
    84.91s  <ret> 발화 (turn15 첫 프레임)
    85.13s  user  발화 끝
    85.15s  agent 발화 시작: <ret> Apex Heating Solutions와의 상담은 현재 무료이고, 의무 사항은 없어.
    86.67s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.42s]: <Apex Heating Solutions currently offers free in-home heating consulta
    90.31s  user  발화 시작: 그거… 진짜 좋은 정보네.
    90.57s  agent 발화 끝
    92.45s  agent 발화 시작: 위험한 우회 방법을 시도하기보다는 전문가와 이런 문제를 해결하는 게 항상 최선이야. 결함 있는 시스템으로 시
    92.66s  user  발화 끝
   103.22s  agent 발화 끝
   103.43s  user  발화 시작: 어떤 종류의 화재를 봤는데?
   105.22s  user  발화 끝
   105.29s  agent 발화 시작: 아, 다행히 히터 때문에 성당 화재가 시작된 건 아니야. 하지만 온갖 화재로 손상된 석조 건축물을 복원했어.
   116.65s  agent 발화 끝
